import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponseDto, OrderItemResponseDto } from './dto/order-response.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(dto: CreateOrderDto): Promise<OrderResponseDto> {
    const menuItemIds = dto.items.map((item) => item.menu_item_id);
    
    const menuItems = await this.prisma.menuItem.findMany({
      where: {
        id: { in: menuItemIds },
        isAvailable: true,
      },
    });

    const menuItemMap = new Map(menuItems.map((item) => [item.id, item]));

    for (const orderItem of dto.items) {
      if (!menuItemMap.has(orderItem.menu_item_id)) {
        throw new BadRequestException(`Menu item not found or unavailable: ${orderItem.menu_item_id}`);
      }
    }

    const orderNumber = await this.generateOrderNumber();

    let totalCents = 0;
    const orderItemsData = dto.items.map((item) => {
      const menuItem = menuItemMap.get(item.menu_item_id)!;
      const subtotal = menuItem.priceCents * item.quantity;
      totalCents += subtotal;
      return {
        menuItemId: item.menu_item_id,
        itemName: menuItem.name,
        itemPriceCents: menuItem.priceCents,
        quantity: item.quantity,
      };
    });

    const order = await this.prisma.order.create({
      data: {
        orderNumber,
        totalCents,
        items: {
          create: orderItemsData,
        },
      },
      include: {
        items: true,
      },
    });

    return this.mapOrderToResponse(order);
  }

  async completeOrder(id: string): Promise<OrderResponseDto> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!order) {
      throw new NotFoundException(`Order not found: ${id}`);
    }

    if (order.status === OrderStatus.COMPLETED) {
      throw new BadRequestException('Order is already completed');
    }

    const updatedOrder = await this.prisma.order.update({
      where: { id },
      data: {
        status: OrderStatus.COMPLETED,
        completedAt: new Date(),
      },
      include: {
        items: true,
      },
    });

    return this.mapOrderToResponse(updatedOrder);
  }

  async getOrders(date?: string): Promise<OrderResponseDto[]> {
    const targetDate = date ? new Date(date) : new Date();
    
    const startOfDay = new Date(targetDate);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(targetDate);
    endOfDay.setHours(23, 59, 59, 999);

    const orders = await this.prisma.order.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return orders.map((order) => this.mapOrderToResponse(order));
  }

  async getOrderById(id: string): Promise<OrderResponseDto> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: true,
      },
    });

    if (!order) {
      throw new NotFoundException(`Order not found: ${id}`);
    }

    return this.mapOrderToResponse(order);
  }

  private async generateOrderNumber(): Promise<string> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const counter = await this.prisma.dailyOrderCounter.upsert({
      where: { date: today },
      update: { counter: { increment: 1 } },
      create: { date: today, counter: 1 },
    });

    return `#${counter.counter.toString().padStart(3, '0')}`;
  }

  private mapOrderToResponse(order: any): OrderResponseDto {
    return {
      id: order.id,
      order_number: order.orderNumber,
      total_cents: order.totalCents,
      status: order.status,
      completed_at: order.completedAt,
      created_at: order.createdAt,
      items: order.items.map((item: any): OrderItemResponseDto => ({
        id: item.id,
        menu_item_id: item.menuItemId,
        item_name: item.itemName,
        item_price_cents: item.itemPriceCents,
        quantity: item.quantity,
        subtotal_cents: item.itemPriceCents * item.quantity,
      })),
    };
  }
}

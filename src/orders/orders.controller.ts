import { Controller, Get, Post, Patch, Param, Body, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponseDto } from './dto/order-response.dto';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() dto: CreateOrderDto): Promise<OrderResponseDto> {
    return this.ordersService.createOrder(dto);
  }

  @Patch(':id/complete')
  async completeOrder(@Param('id') id: string): Promise<OrderResponseDto> {
    return this.ordersService.completeOrder(id);
  }

  @Get()
  async getOrders(@Query('date') date?: string): Promise<OrderResponseDto[]> {
    return this.ordersService.getOrders(date);
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<OrderResponseDto> {
    return this.ordersService.getOrderById(id);
  }
}

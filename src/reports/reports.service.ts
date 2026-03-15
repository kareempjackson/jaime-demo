import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DailyReportResponseDto, TopItemDto } from './dto/daily-report-response.dto';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDailyReport(dateString: string): Promise<DailyReportResponseDto> {
    const startOfDay = new Date(`${dateString}T00:00:00.000Z`);
    const endOfDay = new Date(`${dateString}T23:59:59.999Z`);

    const orders = await this.prisma.order.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    const orderCount = orders.length;
    const completedOrders = orders.filter((o) => o.status === 'COMPLETED');
    const cancelledOrders = orders.filter((o) => o.status === 'CANCELLED');
    const completedCount = completedOrders.length;
    const cancelledCount = cancelledOrders.length;

    // Calculate total revenue from completed orders only
    const totalRevenueCents = completedOrders.reduce(
      (sum, order) => sum + order.totalCents,
      0,
    );

    const averageOrderCents =
      completedCount > 0 ? Math.round(totalRevenueCents / completedCount) : 0;

    // Aggregate top items from completed orders
    const itemAggregation = new Map<
      string,
      { name: string; quantitySold: number; revenueCents: number }
    >();

    for (const order of completedOrders) {
      for (const item of order.orderItems) {
        const key = item.menuItemId;
        const existing = itemAggregation.get(key);
        const itemRevenue = item.priceCents * item.quantity;

        if (existing) {
          existing.quantitySold += item.quantity;
          existing.revenueCents += itemRevenue;
        } else {
          itemAggregation.set(key, {
            name: item.menuItem.name,
            quantitySold: item.quantity,
            revenueCents: itemRevenue,
          });
        }
      }
    }

    // Sort by quantity sold descending, take top 10
    const topItems: TopItemDto[] = Array.from(itemAggregation.values())
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, 10)
      .map((item) => ({
        name: item.name,
        quantity_sold: item.quantitySold,
        revenue_cents: item.revenueCents,
      }));

    return {
      date: dateString,
      total_revenue_cents: totalRevenueCents,
      order_count: orderCount,
      completed_count: completedCount,
      cancelled_count: cancelledCount,
      average_order_cents: averageOrderCents,
      top_items: topItems,
    };
  }
}

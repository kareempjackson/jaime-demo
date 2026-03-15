export class TopItemDto {
  name: string;
  quantity_sold: number;
  revenue_cents: number;
}

export class DailyReportResponseDto {
  date: string;
  total_revenue_cents: number;
  order_count: number;
  completed_count: number;
  cancelled_count: number;
  average_order_cents: number;
  top_items: TopItemDto[];
}

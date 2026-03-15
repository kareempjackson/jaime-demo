export interface TopItem {
  menu_item_id: string;
  name: string;
  quantity_sold: number;
  revenue_cents: number;
}

export interface DailyReport {
  date: string;
  total_revenue_cents: number;
  order_count: number;
  completed_count: number;
  top_items: TopItem[];
}

export interface OrderItem {
  menu_item_id: string;
  name: string;
  quantity: number;
  unit_price_cents: number;
}

export interface Order {
  id: string;
  order_number: string;
  status: 'pending' | 'completed';
  total_cents: number;
  created_at: string;
  completed_at: string | null;
  items: OrderItem[];
}

import { OrderStatus } from '@prisma/client';

export class OrderItemResponseDto {
  id: string;
  menu_item_id: string;
  item_name: string;
  item_price_cents: number;
  quantity: number;
  subtotal_cents: number;
}

export class OrderResponseDto {
  id: string;
  order_number: string;
  total_cents: number;
  status: OrderStatus;
  completed_at: Date | null;
  created_at: Date;
  items: OrderItemResponseDto[];
}

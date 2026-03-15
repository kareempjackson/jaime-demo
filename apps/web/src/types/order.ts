export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  name: string;
  quantity: number;
  priceCents: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  totalCents: number;
  items: OrderItem[];
  createdAt: string;
  completedAt: string | null;
}

export interface OrdersResponse {
  orders: Order[];
}

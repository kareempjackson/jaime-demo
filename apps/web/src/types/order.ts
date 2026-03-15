export interface MenuItem {
  id: string;
  name: string;
  priceCents: number;
  category: string;
  position?: number;
  isArchived?: boolean;
}

export interface OrderItem {
  menuItemId: string;
  name: string;
  priceCents: number;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  totalCents: number;
  status: 'pending' | 'completed';
  createdAt: string;
  completedAt?: string;
}

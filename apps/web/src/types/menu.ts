export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  priceCents: number;
  category: string;
  position: number;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  store_id: string;
  name: string;
  price_cents: number;
  category: string;
  position: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
}

export interface MenuItemsByCategory {
  [category: string]: MenuItem[];
}

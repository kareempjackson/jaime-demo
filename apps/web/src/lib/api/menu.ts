import { MenuItem } from '@/types/menu';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await fetchWithAuth('/api/menu?include_archived=true');
    return response;
  } catch (error) {
    console.error('Failed to fetch menu items:', error);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const items = await getMenuItems();
    const categories = new Set<string>();
    items.forEach((item) => {
      if (item.category) {
        categories.add(item.category);
      }
    });
    return Array.from(categories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export async function createMenuItem(data: {
  name: string;
  priceCents: number;
  category: string;
}): Promise<MenuItem> {
  return fetchWithAuth('/api/menu', {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      price_cents: data.priceCents,
      category: data.category,
    }),
  });
}

export async function updateMenuItem(
  id: string,
  data: { name: string; priceCents: number; category: string }
): Promise<MenuItem> {
  return fetchWithAuth(`/api/menu/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: data.name,
      price_cents: data.priceCents,
      category: data.category,
    }),
  });
}

export async function archiveMenuItem(id: string): Promise<void> {
  return fetchWithAuth(`/api/menu/${id}`, {
    method: 'DELETE',
  });
}

export async function restoreMenuItem(id: string): Promise<MenuItem> {
  return fetchWithAuth(`/api/menu/${id}/restore`, {
    method: 'POST',
  });
}

export async function reorderMenuItems(
  items: { id: string; position: number }[]
): Promise<void> {
  return fetchWithAuth('/api/menu/reorder', {
    method: 'POST',
    body: JSON.stringify({ items }),
  });
}

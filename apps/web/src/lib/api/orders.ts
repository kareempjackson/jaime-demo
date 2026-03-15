import { Order, OrdersResponse } from '@/types/order';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

async function getAuthHeaders(): Promise<HeadersInit> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function fetchTodaysOrders(): Promise<Order[]> {
  const headers = await getAuthHeaders();
  const response = await fetch(`${API_BASE_URL}/orders`, {
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch orders: ${response.status}`);
  }

  const data: OrdersResponse = await response.json();
  return data.orders;
}

export async function fetchOrderById(id: string): Promise<Order> {
  const headers = await getAuthHeaders();
  const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch order: ${response.status}`);
  }

  return response.json();
}

export async function markOrderComplete(id: string): Promise<Order> {
  const headers = await getAuthHeaders();
  const response = await fetch(`${API_BASE_URL}/orders/${id}/complete`, {
    method: 'POST',
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to complete order: ${response.status}`);
  }

  return response.json();
}

export async function cancelOrder(id: string): Promise<Order> {
  const headers = await getAuthHeaders();
  const response = await fetch(`${API_BASE_URL}/orders/${id}/cancel`, {
    method: 'POST',
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to cancel order: ${response.status}`);
  }

  return response.json();
}

'use client';

import { useState } from 'react';
import { formatPrice } from '@/utils/formatPrice';

interface OrderItem {
  id: string;
  menu_item_id: string;
  name: string;
  quantity: number;
  unit_price_cents: number;
  subtotal_cents: number;
}

interface Order {
  id: string;
  order_number: string;
  status: 'PENDING' | 'COMPLETED';
  total_cents: number;
  created_at: string;
  completed_at: string | null;
  items: OrderItem[];
}

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const formatTime = (dateStr: string): string => {
    return new Date(dateStr).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getItemsSummary = (items: OrderItem[]): string => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
  };

  const toggleExpand = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if (orders.length === 0) {
    return (
      <div className="bg-[#141416] rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-[#fafafa] mb-6">Orders</h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1c1c1f] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#6b6b70]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-[#a1a1a6]">No orders for this day</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#141416] rounded-2xl overflow-hidden">
      <div className="p-8 pb-4">
        <h2 className="text-xl font-semibold text-[#fafafa]">Orders</h2>
      </div>
      
      {/* Table Header */}
      <div className="px-8 py-3 bg-[#1c1c1f] grid grid-cols-12 gap-4 text-sm font-medium text-[#a1a1a6]">
        <div className="col-span-2">Order</div>
        <div className="col-span-2">Time</div>
        <div className="col-span-4">Items</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2 text-right">Total</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-[#1c1c1f]">
        {orders.map((order) => (
          <div key={order.id}>
            {/* Order Row */}
            <button
              onClick={() => toggleExpand(order.id)}
              className="w-full px-8 py-4 grid grid-cols-12 gap-4 items-center hover:bg-[#1c1c1f] transition-colors text-left"
            >
              <div className="col-span-2">
                <span className="text-[#fafafa] font-medium">#{order.order_number}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#a1a1a6]">{formatTime(order.created_at)}</span>
              </div>
              <div className="col-span-4">
                <span className="text-[#a1a1a6]">{getItemsSummary(order.items)}</span>
              </div>
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    order.status === 'COMPLETED'
                      ? 'bg-[#22c55e]/20 text-[#22c55e]'
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}
                >
                  {order.status === 'COMPLETED' ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <span className="text-[#fafafa] font-medium">{formatPrice(order.total_cents)}</span>
                <svg
                  className={`w-5 h-5 text-[#6b6b70] transition-transform ${
                    expandedOrderId === order.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Expanded Line Items */}
            {expandedOrderId === order.id && (
              <div className="px-8 pb-4 bg-[#0a0a0b]">
                <div className="bg-[#1c1c1f] rounded-xl p-4">
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-[#232326] rounded-md flex items-center justify-center text-[#a1a1a6] text-xs">
                            {item.quantity}
                          </span>
                          <span className="text-[#fafafa]">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[#6b6b70]">
                            {formatPrice(item.unit_price_cents)} each
                          </span>
                          <span className="text-[#a1a1a6] font-medium">
                            {formatPrice(item.subtotal_cents)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#232326] flex items-center justify-between">
                    <span className="text-[#a1a1a6] font-medium">Order Total</span>
                    <span className="text-[#22c55e] font-semibold text-lg">
                      {formatPrice(order.total_cents)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

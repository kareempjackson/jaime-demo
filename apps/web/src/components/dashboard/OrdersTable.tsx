'use client';

import { useState } from 'react';

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
  created_at: string;
  completed_at: string | null;
  total_cents: number;
  items: OrderItem[];
}

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const formatCurrency = (cents: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  const formatTime = (dateString: string): string => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getItemsSummary = (items: OrderItem[]): string => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
  };

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-[#1c1c1f] rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-[#6b6b70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-[#6b6b70] text-lg">No orders for this day</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {orders.map((order) => {
        const isExpanded = expandedOrderId === order.id;

        return (
          <div key={order.id} className="bg-[#1c1c1f] rounded-xl overflow-hidden">
            {/* Order Row */}
            <button
              onClick={() => setExpandedOrderId(isExpanded ? null : order.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-[#232326] transition-colors min-h-[64px]"
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                  <span className="text-[#fafafa] font-semibold">
                    {order.order_number}
                  </span>
                  <span className="text-[#6b6b70] text-sm">
                    {formatTime(order.created_at)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-[#fafafa] font-semibold">
                    {formatCurrency(order.total_cents)}
                  </span>
                  <span className="text-[#a1a1a6] text-sm">
                    {getItemsSummary(order.items)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {order.completed_at ? (
                    <span className="px-2 py-1 bg-[#22c55e]/20 text-[#22c55e] text-xs font-medium rounded-lg">
                      Completed
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-[#f59e0b]/20 text-[#f59e0b] text-xs font-medium rounded-lg">
                      Pending
                    </span>
                  )}

                  <svg
                    className={`w-5 h-5 text-[#6b6b70] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="border-t border-[#232326] p-4 bg-[#141416]">
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-[#22c55e] font-medium min-w-[24px]">
                          {item.quantity}x
                        </span>
                        <span className="text-[#fafafa]">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#6b6b70] text-sm">
                          @ {formatCurrency(item.unit_price_cents)}
                        </span>
                        <span className="text-[#fafafa] font-medium min-w-[70px] text-right">
                          {formatCurrency(item.subtotal_cents)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#232326] flex items-center justify-between">
                  <span className="text-[#a1a1a6]">Total</span>
                  <span className="text-[#22c55e] font-bold text-lg">
                    {formatCurrency(order.total_cents)}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

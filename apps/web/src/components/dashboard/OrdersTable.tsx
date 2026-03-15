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
  status: string;
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

  const toggleExpand = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      pending: 'bg-[#f59e0b]/10 text-[#f59e0b]',
      completed: 'bg-[#22c55e]/10 text-[#22c55e]',
      cancelled: 'bg-red-500/10 text-red-500',
    };
    return statusStyles[status] || statusStyles.pending;
  };

  if (orders.length === 0) {
    return (
      <div className="bg-[#141416] rounded-2xl p-6 border border-[#232326]">
        <h2 className="text-xl font-semibold text-[#fafafa] mb-6">Orders</h2>
        <div className="flex items-center justify-center h-48 text-[#6b6b70]">
          <p>No orders for this day</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#141416] rounded-2xl border border-[#232326] overflow-hidden">
      <div className="p-6 border-b border-[#232326]">
        <h2 className="text-xl font-semibold text-[#fafafa]">Orders</h2>
        <p className="text-[#6b6b70] text-sm mt-1">{orders.length} orders total</p>
      </div>

      <div className="divide-y divide-[#232326]">
        {orders.map((order) => (
          <div key={order.id}>
            <button
              onClick={() => toggleExpand(order.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1c1c1f] transition-colors text-left"
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg
                    className={`w-5 h-5 text-[#6b6b70] transition-transform duration-200 ${
                      expandedOrderId === order.id ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[#fafafa] font-mono font-medium">{order.order_number}</span>
                </div>
                <span className="text-[#a1a1a6] text-sm">{formatTime(order.created_at)}</span>
                <span className={`px-2 py-1 rounded-md text-xs font-medium capitalize ${getStatusBadge(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#6b6b70] text-sm">{order.items.length} items</span>
                <span className="text-[#fafafa] font-semibold min-w-[80px] text-right">
                  {formatCurrency(order.total_cents)}
                </span>
              </div>
            </button>

            {expandedOrderId === order.id && (
              <div className="px-6 pb-4 bg-[#1c1c1f]">
                <div className="ml-7 border-l-2 border-[#232326] pl-6 py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="text-[#6b6b70] text-xs uppercase tracking-wider">
                        <th className="text-left py-2">Item</th>
                        <th className="text-center py-2">Qty</th>
                        <th className="text-right py-2">Unit Price</th>
                        <th className="text-right py-2">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#232326]">
                      {order.items.map((item) => (
                        <tr key={item.id} className="text-sm">
                          <td className="py-3 text-[#fafafa]">{item.name}</td>
                          <td className="py-3 text-[#a1a1a6] text-center">{item.quantity}</td>
                          <td className="py-3 text-[#a1a1a6] text-right">{formatCurrency(item.unit_price_cents)}</td>
                          <td className="py-3 text-[#fafafa] text-right font-medium">
                            {formatCurrency(item.subtotal_cents)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

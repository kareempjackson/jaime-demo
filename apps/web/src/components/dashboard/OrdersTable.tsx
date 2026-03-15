'use client';

import { useState } from 'react';
import { Order } from './DashboardContent';

interface OrdersTableProps {
  orders: Order[];
}

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleExpand = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if (!orders || orders.length === 0) {
    return (
      <section className="bg-[#141416] border border-[#232326] rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Orders</h2>
        <div className="flex items-center justify-center h-32 text-[#6b6b70]">
          No orders for this day
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#141416] border border-[#232326] rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Orders ({orders.length})</h2>
      <div className="overflow-hidden rounded-xl border border-[#232326]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#1c1c1f]">
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">Order</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">Time</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">Items</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">Status</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-[#a1a1a6]">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#232326]">
            {orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                isExpanded={expandedOrderId === order.id}
                onToggle={() => toggleExpand(order.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

interface OrderRowProps {
  order: Order;
  isExpanded: boolean;
  onToggle: () => void;
}

function OrderRow({ order, isExpanded, onToggle }: OrderRowProps) {
  const itemCount = order.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const itemNames = order.items?.map((item) => item.name).join(', ') || '';

  return (
    <>
      <tr
        onClick={onToggle}
        className="bg-[#141416] hover:bg-[#1c1c1f] cursor-pointer transition-colors min-h-[48px]"
      >
        <td className="px-4 py-4">
          <span className="font-mono font-semibold text-[#fafafa]">
            {order.order_number}
          </span>
        </td>
        <td className="px-4 py-4 text-[#a1a1a6]">
          {formatTime(order.created_at)}
        </td>
        <td className="px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#232326] text-[#fafafa] px-2 py-1 rounded-lg text-sm font-medium">
              {itemCount}
            </span>
            <span className="text-[#a1a1a6] text-sm truncate max-w-[200px]">
              {itemNames}
            </span>
          </div>
        </td>
        <td className="px-4 py-4">
          <StatusBadge status={order.status} />
        </td>
        <td className="px-4 py-4 text-right">
          <span className="font-semibold text-[#fafafa]">
            {formatCurrency(order.total_cents)}
          </span>
          <ChevronIcon isExpanded={isExpanded} />
        </td>
      </tr>
      {isExpanded && order.items && (
        <tr>
          <td colSpan={5} className="bg-[#0a0a0b] px-4 py-4">
            <div className="ml-4 space-y-2">
              <p className="text-sm font-medium text-[#a1a1a6] mb-3">Line Items</p>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 px-4 bg-[#141416] rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 py-1 rounded text-sm font-medium">
                      ×{item.quantity}
                    </span>
                    <span className="text-[#fafafa]">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#6b6b70] text-sm">
                      @ {formatCurrency(item.unit_price_cents)}
                    </span>
                    <span className="font-semibold text-[#fafafa]">
                      {formatCurrency(item.subtotal_cents)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function StatusBadge({ status }: { status: 'PENDING' | 'COMPLETED' }) {
  const isCompleted = status === 'COMPLETED';
  
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
        isCompleted
          ? 'bg-[#22c55e]/10 text-[#22c55e]'
          : 'bg-yellow-500/10 text-yellow-500'
      }`}
    >
      {isCompleted ? 'Completed' : 'Pending'}
    </span>
  );
}

function ChevronIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <svg
      className={`inline-block ml-2 w-5 h-5 text-[#6b6b70] transition-transform ${
        isExpanded ? 'rotate-180' : ''
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

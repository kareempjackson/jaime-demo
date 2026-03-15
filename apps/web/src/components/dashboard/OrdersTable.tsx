'use client';

import { useState } from 'react';
import { Order } from '@/types/dashboard';
import { OrderRow } from './OrderRow';

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleExpanded = (orderId: string) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  if (orders.length === 0) {
    return (
      <div className="rounded-xl bg-[#141416] p-6">
        <h2 className="mb-4 text-lg font-semibold text-[#fafafa]">Orders</h2>
        <p className="py-8 text-center text-[#6b6b70]">No orders for this day</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#141416] p-6">
      <h2 className="mb-4 text-lg font-semibold text-[#fafafa]">
        Orders ({orders.length})
      </h2>
      <div className="overflow-hidden rounded-lg border border-[#1c1c1f]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1c1c1f] bg-[#1c1c1f]">
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">
                Order #
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">
                Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">
                Items
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#a1a1a6]">
                Status
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-[#a1a1a6]">
                Total
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                isExpanded={expandedOrderId === order.id}
                onToggle={() => toggleExpanded(order.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

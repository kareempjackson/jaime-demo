'use client';

import { formatPrice } from '@/utils/formatPrice';

interface DashboardStatsProps {
  totalRevenueCents: number;
  orderCount: number;
  averageOrderCents: number;
}

export function DashboardStats({
  totalRevenueCents,
  orderCount,
  averageOrderCents,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Revenue - Large and prominent */}
      <div className="md:col-span-1 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-2xl p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#0a0a0b]/70 font-medium">Total Revenue</span>
          <div className="w-12 h-12 bg-[#0a0a0b]/20 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-[#0a0a0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="text-5xl font-bold text-[#0a0a0b]">
          {formatPrice(totalRevenueCents)}
        </div>
      </div>

      {/* Order Count */}
      <div className="bg-[#141416] rounded-2xl p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#a1a1a6] font-medium">Orders</span>
          <div className="w-12 h-12 bg-[#1c1c1f] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
        </div>
        <div className="text-5xl font-bold text-[#fafafa]">
          {orderCount}
        </div>
        <p className="text-[#6b6b70] mt-2">Total orders placed</p>
      </div>

      {/* Average Order Value */}
      <div className="bg-[#141416] rounded-2xl p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#a1a1a6] font-medium">Average Order</span>
          <div className="w-12 h-12 bg-[#1c1c1f] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <div className="text-5xl font-bold text-[#fafafa]">
          {formatPrice(averageOrderCents)}
        </div>
        <p className="text-[#6b6b70] mt-2">Per transaction</p>
      </div>
    </div>
  );
}

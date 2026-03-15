'use client';

import { formatPrice } from '@/utils/formatPrice';

interface TopItem {
  menu_item_id: string;
  name: string;
  quantity_sold: number;
  revenue_cents: number;
}

interface TopItemsChartProps {
  items: TopItem[];
}

export function TopItemsChart({ items }: TopItemsChartProps) {
  const topItems = items.slice(0, 5);
  const maxQuantity = Math.max(...topItems.map(item => item.quantity_sold), 1);

  if (topItems.length === 0) {
    return (
      <div className="bg-[#141416] rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-[#fafafa] mb-6">Top Selling Items</h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1c1c1f] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#6b6b70]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-[#a1a1a6]">No sales data for this day</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#141416] rounded-2xl p-8">
      <h2 className="text-xl font-semibold text-[#fafafa] mb-6">Top Selling Items</h2>
      <div className="space-y-4">
        {topItems.map((item, index) => {
          const barWidth = (item.quantity_sold / maxQuantity) * 100;
          return (
            <div key={item.menu_item_id} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#1c1c1f] rounded-lg flex items-center justify-center text-[#a1a1a6] font-medium">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#fafafa] font-medium truncate">{item.name}</span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#a1a1a6]">{item.quantity_sold} sold</span>
                    <span className="text-[#22c55e] font-medium">{formatPrice(item.revenue_cents)}</span>
                  </div>
                </div>
                <div className="h-3 bg-[#1c1c1f] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full transition-all duration-500"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

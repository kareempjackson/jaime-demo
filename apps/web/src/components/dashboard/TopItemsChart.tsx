'use client';

import { TopItem } from './DashboardContent';

interface TopItemsChartProps {
  items: TopItem[];
}

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

export function TopItemsChart({ items }: TopItemsChartProps) {
  if (!items || items.length === 0) {
    return (
      <section className="bg-[#141416] border border-[#232326] rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#fafafa] mb-4">Top Selling Items</h2>
        <div className="flex items-center justify-center h-48 text-[#6b6b70]">
          No sales data for this day
        </div>
      </section>
    );
  }

  const maxQuantity = Math.max(...items.map((item) => item.quantity_sold));
  const topFive = items.slice(0, 5);

  return (
    <section className="bg-[#141416] border border-[#232326] rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-[#fafafa] mb-6">Top 5 Selling Items</h2>
      <div className="space-y-4">
        {topFive.map((item, index) => {
          const percentage = maxQuantity > 0 ? (item.quantity_sold / maxQuantity) * 100 : 0;
          
          return (
            <div key={item.menu_item_id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[#6b6b70] text-sm font-medium w-6">
                    #{index + 1}
                  </span>
                  <span className="text-[#fafafa] font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#a1a1a6] text-sm">
                    {item.quantity_sold} sold
                  </span>
                  <span className="text-[#22c55e] font-semibold min-w-[80px] text-right">
                    {formatCurrency(item.revenue_cents)}
                  </span>
                </div>
              </div>
              <div className="ml-9 h-3 bg-[#232326] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

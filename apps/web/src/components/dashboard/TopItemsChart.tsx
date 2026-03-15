import { TopItem } from '@/types/dashboard';
import { formatPrice } from '@/utils/formatPrice';

interface TopItemsChartProps {
  topItems: TopItem[];
}

export function TopItemsChart({ topItems }: TopItemsChartProps) {
  if (topItems.length === 0) {
    return (
      <div className="rounded-xl bg-[#141416] p-6">
        <h2 className="mb-4 text-lg font-semibold text-[#fafafa]">Top Selling Items</h2>
        <p className="text-center text-[#6b6b70] py-8">No sales data for this day</p>
      </div>
    );
  }

  const maxQuantity = Math.max(...topItems.map((item) => item.quantity_sold));

  return (
    <div className="rounded-xl bg-[#141416] p-6">
      <h2 className="mb-6 text-lg font-semibold text-[#fafafa]">Top Selling Items</h2>
      <div className="space-y-4">
        {topItems.slice(0, 5).map((item, index) => {
          const widthPercent = (item.quantity_sold / maxQuantity) * 100;
          return (
            <div key={item.menu_item_id} className="flex items-center gap-4">
              <span className="w-6 text-right text-sm font-medium text-[#6b6b70]">
                {index + 1}
              </span>
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-medium text-[#fafafa]">{item.name}</span>
                  <span className="text-sm text-[#a1a1a6]">
                    {item.quantity_sold} sold • {formatPrice(item.revenue_cents)}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#1c1c1f]">
                  <div
                    className="h-full rounded-full bg-[#22c55e] transition-all duration-500"
                    style={{ width: `${widthPercent}%` }}
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

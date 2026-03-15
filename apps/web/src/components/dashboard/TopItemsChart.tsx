'use client';

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
  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-[#6b6b70]">
        <p>No sales data for this day</p>
      </div>
    );
  }

  const maxQuantity = Math.max(...items.map((item) => item.quantity_sold));

  const formatCurrency = (cents: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  return (
    <div className="space-y-4">
      {items.slice(0, 5).map((item, index) => {
        const percentage = maxQuantity > 0 ? (item.quantity_sold / maxQuantity) * 100 : 0;

        return (
          <div key={item.menu_item_id} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-[#6b6b70] text-sm font-medium w-6">#{index + 1}</span>
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
            <div className="h-3 bg-[#1c1c1f] rounded-full overflow-hidden ml-9">
              <div
                className="h-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

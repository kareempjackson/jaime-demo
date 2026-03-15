import { DailyReport } from '@/types/dashboard';
import { formatPrice } from '@/utils/formatPrice';

interface StatsCardsProps {
  report: DailyReport | null;
}

export function StatsCards({ report }: StatsCardsProps) {
  const totalRevenue = report?.total_revenue_cents ?? 0;
  const orderCount = report?.order_count ?? 0;
  const averageOrderValue = orderCount > 0 ? Math.round(totalRevenue / orderCount) : 0;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-xl bg-[#141416] p-6">
        <p className="text-sm font-medium text-[#a1a1a6]">Total Revenue</p>
        <p className="mt-2 text-4xl font-bold text-[#22c55e]">
          {formatPrice(totalRevenue)}
        </p>
      </div>

      <div className="rounded-xl bg-[#141416] p-6">
        <p className="text-sm font-medium text-[#a1a1a6]">Orders</p>
        <p className="mt-2 text-4xl font-bold text-[#fafafa]">{orderCount}</p>
        <p className="mt-1 text-sm text-[#6b6b70]">
          {report?.completed_count ?? 0} completed
        </p>
      </div>

      <div className="rounded-xl bg-[#141416] p-6">
        <p className="text-sm font-medium text-[#a1a1a6]">Avg Order Value</p>
        <p className="mt-2 text-4xl font-bold text-[#fafafa]">
          {formatPrice(averageOrderValue)}
        </p>
      </div>
    </div>
  );
}

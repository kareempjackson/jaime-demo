'use client';

interface StatsCardsProps {
  totalRevenue: number;
  orderCount: number;
  averageOrder: number;
}

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

export function StatsCards({ totalRevenue, orderCount, averageOrder }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Total Revenue"
        value={formatCurrency(totalRevenue)}
        variant="primary"
      />
      <StatCard
        label="Orders"
        value={orderCount.toString()}
        variant="secondary"
      />
      <StatCard
        label="Average Order"
        value={formatCurrency(averageOrder)}
        variant="secondary"
      />
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  variant: 'primary' | 'secondary';
}

function StatCard({ label, value, variant }: StatCardProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <div
      className={`rounded-2xl p-6 ${
        isPrimary
          ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a]'
          : 'bg-[#141416] border border-[#232326]'
      }`}
    >
      <p
        className={`text-sm font-medium ${
          isPrimary ? 'text-white/80' : 'text-[#a1a1a6]'
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-2 font-bold ${
          isPrimary
            ? 'text-4xl text-white'
            : 'text-3xl text-[#fafafa]'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

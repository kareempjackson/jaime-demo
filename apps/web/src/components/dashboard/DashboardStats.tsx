interface DashboardStatsProps {
  totalRevenue: number;
  orderCount: number;
  averageOrder: number;
}

export function DashboardStats({ totalRevenue, orderCount, averageOrder }: DashboardStatsProps) {
  const formatCurrency = (cents: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#141416] rounded-2xl p-6 border border-[#232326]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#a1a1a6] text-sm font-medium">Total Revenue</span>
          <div className="w-10 h-10 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p className="text-4xl font-bold text-[#fafafa]">{formatCurrency(totalRevenue)}</p>
        <p className="text-[#6b6b70] text-sm mt-2">Today&apos;s earnings</p>
      </div>

      <div className="bg-[#141416] rounded-2xl p-6 border border-[#232326]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#a1a1a6] text-sm font-medium">Order Count</span>
          <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
        <p className="text-4xl font-bold text-[#fafafa]">{orderCount}</p>
        <p className="text-[#6b6b70] text-sm mt-2">Orders placed</p>
      </div>

      <div className="bg-[#141416] rounded-2xl p-6 border border-[#232326]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#a1a1a6] text-sm font-medium">Average Order</span>
          <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <p className="text-4xl font-bold text-[#fafafa]">{formatCurrency(averageOrder)}</p>
        <p className="text-[#6b6b70] text-sm mt-2">Per transaction</p>
      </div>
    </div>
  );
}

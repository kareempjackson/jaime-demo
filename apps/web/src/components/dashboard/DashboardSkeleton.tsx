export function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="h-9 w-64 bg-[#232326] rounded-lg" />
          <div className="h-5 w-48 bg-[#1c1c1f] rounded-lg mt-2" />
        </div>
        <div className="h-12 w-40 bg-[#232326] rounded-xl" />
      </div>

      {/* Stats cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-32 bg-[#232326] rounded-2xl" />
        <div className="h-32 bg-[#1c1c1f] rounded-2xl" />
        <div className="h-32 bg-[#1c1c1f] rounded-2xl" />
      </div>

      {/* Chart skeleton */}
      <div className="bg-[#141416] border border-[#232326] rounded-2xl p-6">
        <div className="h-6 w-48 bg-[#232326] rounded-lg mb-6" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <div className="h-5 w-32 bg-[#232326] rounded" />
                <div className="h-5 w-20 bg-[#232326] rounded" />
              </div>
              <div className="ml-9 h-3 bg-[#232326] rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Table skeleton */}
      <div className="bg-[#141416] border border-[#232326] rounded-2xl p-6">
        <div className="h-6 w-32 bg-[#232326] rounded-lg mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-14 bg-[#1c1c1f] rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

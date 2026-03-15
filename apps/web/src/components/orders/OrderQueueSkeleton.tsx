export function OrderQueueSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-5 w-40 bg-[#232326] rounded animate-pulse" />
        <div className="h-5 w-32 bg-[#232326] rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[0, 1].map((colIndex) => (
          <div key={colIndex} className="bg-[#141416] rounded-2xl p-4 min-h-[60vh]">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#232326]">
              <div className="w-3 h-3 rounded-full bg-[#232326] animate-pulse" />
              <div className="h-6 w-24 bg-[#232326] rounded animate-pulse" />
              <div className="ml-auto h-6 w-8 bg-[#232326] rounded-full animate-pulse" />
            </div>

            <div className="space-y-3">
              {[0, 1, 2].map((cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-[#1c1c1f] p-4 rounded-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="h-7 w-16 bg-[#232326] rounded animate-pulse" />
                      <div className="h-4 w-20 bg-[#232326] rounded animate-pulse" />
                    </div>
                    <div className="space-y-2 text-right">
                      <div className="h-6 w-16 bg-[#232326] rounded animate-pulse ml-auto" />
                      <div className="h-4 w-12 bg-[#232326] rounded animate-pulse ml-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

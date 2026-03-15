'use client';

import { useState } from 'react';
import { MenuItem } from '@/types/menu';

interface ArchivedItemsSectionProps {
  items: MenuItem[];
  onRestore: (item: MenuItem) => void;
}

export function ArchivedItemsSection({ items, onRestore }: ArchivedItemsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <div className="mt-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 text-[#6b6b70] hover:text-[#a1a1a6] transition-colors w-full py-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="font-medium">Archived Items ({items.length})</span>
      </button>

      {isExpanded && (
        <div className="mt-3 bg-[#141416] rounded-2xl overflow-hidden opacity-75">
          <div className="divide-y divide-[#232326]">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 px-5 py-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#a1a1a6] font-medium truncate">{item.name}</h3>
                  <p className="text-sm text-[#6b6b70] capitalize">{item.category}</p>
                </div>
                <div className="text-[#6b6b70] font-semibold tabular-nums">
                  {formatPrice(item.price_cents)}
                </div>
                <button
                  onClick={() => onRestore(item)}
                  className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/10 rounded-xl transition-colors min-h-[48px] font-medium"
                >
                  Restore
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

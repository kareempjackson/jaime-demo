'use client';

import { useState } from 'react';
import { MenuItem } from './AdminMenuScreen';

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
        className="flex items-center gap-3 w-full p-4 bg-[#141416] rounded-xl hover:bg-[#1c1c1f] transition-colors text-left"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`text-[#6b6b70] transition-transform ${isExpanded ? 'rotate-90' : ''}`}
        >
          <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[#a1a1a6] font-medium">Archived Items</span>
        <span className="text-[#6b6b70] text-sm">({items.length})</span>
      </button>

      {isExpanded && (
        <div className="mt-2 bg-[#141416] rounded-xl p-4 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-[#1c1c1f] rounded-xl opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[#fafafa] font-medium truncate">{item.name}</h3>
                <p className="text-[#6b6b70] text-sm capitalize">{item.category}</p>
              </div>

              <div className="text-[#a1a1a6] font-medium min-w-[80px] text-right">
                {formatPrice(item.priceCents)}
              </div>

              <button
                onClick={() => onRestore(item)}
                className="px-4 py-2 text-[#22c55e] hover:bg-[#22c55e]/10 rounded-lg transition-colors font-medium min-h-[48px] flex items-center"
              >
                Restore
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

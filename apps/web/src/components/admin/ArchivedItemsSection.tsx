'use client';

import { useState } from 'react';
import { MenuItem } from '@/types/menu';
import { ChevronIcon } from '@/components/icons/ChevronIcon';
import { RestoreIcon } from '@/components/icons/RestoreIcon';
import { formatPrice } from '@/lib/utils/formatPrice';

interface ArchivedItemsSectionProps {
  items: MenuItem[];
  onRestore: (item: MenuItem) => void;
}

export function ArchivedItemsSection({ items, onRestore }: ArchivedItemsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-[#141416] rounded-xl border border-[#232326] overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#1c1c1f] transition-colors min-h-[64px]"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-medium text-[#6b6b70]">Archived Items</h2>
          <span className="px-2 py-0.5 text-sm bg-[#232326] text-[#6b6b70] rounded-full">
            {items.length}
          </span>
        </div>
        <ChevronIcon
          className={`w-5 h-5 text-[#6b6b70] transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="divide-y divide-[#232326] border-t border-[#232326]">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-[#1c1c1f] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[#6b6b70] font-medium truncate">{item.name}</h3>
                <p className="text-sm text-[#6b6b70]">{item.category}</p>
              </div>

              <div className="text-[#6b6b70] font-semibold tabular-nums">
                {formatPrice(item.priceCents)}
              </div>

              <button
                onClick={() => onRestore(item)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#22c55e] hover:bg-[#232326] transition-colors min-h-[48px]"
                aria-label={`Restore ${item.name}`}
              >
                <RestoreIcon className="w-5 h-5" />
                <span className="font-medium">Restore</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

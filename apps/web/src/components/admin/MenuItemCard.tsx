'use client';

import { MenuItem } from './AdminMenuScreen';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  totalItems: number;
  onEdit: () => void;
  onArchive: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export function MenuItemCard({
  item,
  index,
  totalItems,
  onEdit,
  onArchive,
  onMoveUp,
  onMoveDown,
}: MenuItemCardProps) {
  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-[#1c1c1f] rounded-xl hover:bg-[#232326] transition-colors group">
      <div className="flex flex-col gap-1">
        <button
          onClick={onMoveUp}
          disabled={index === 0}
          className="p-1 text-[#6b6b70] hover:text-[#fafafa] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Move up"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6L14 10H6L10 6Z" fill="currentColor"/>
          </svg>
        </button>
        <button
          onClick={onMoveDown}
          disabled={index === totalItems - 1}
          className="p-1 text-[#6b6b70] hover:text-[#fafafa] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Move down"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14L6 10H14L10 14Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[#fafafa] font-medium truncate">{item.name}</h3>
      </div>

      <div className="text-[#22c55e] font-semibold text-lg min-w-[80px] text-right">
        {formatPrice(item.priceCents)}
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="p-3 text-[#a1a1a6] hover:text-[#fafafa] hover:bg-[#2a2a2e] rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Edit item"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.85 2.85L17.15 5.15L5.4 16.9L2.5 17.5L3.1 14.6L14.85 2.85Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={onArchive}
          className="p-3 text-[#a1a1a6] hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Archive item"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H17M8 10H12M5 6V16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16V6M7 6V4C7 3.44772 7.44772 3 8 3H12C12.5523 3 13 3.44772 13 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

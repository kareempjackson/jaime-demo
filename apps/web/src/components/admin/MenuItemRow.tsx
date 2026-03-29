'use client';

import { MenuItem } from '@/types/menu';

interface MenuItemRowProps {
  item: MenuItem;
  onEdit: () => void;
  onArchive: () => void;
}

export function MenuItemRow({ item, onEdit, onArchive }: MenuItemRowProps) {
  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <div className="flex items-center gap-4 px-5 py-4">
      {/* Drag Handle */}
      <div className="cursor-grab active:cursor-grabbing text-[#6b6b70] hover:text-[#a1a1a6] touch-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="6" r="1" fill="currentColor" />
          <circle cx="15" cy="6" r="1" fill="currentColor" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
          <circle cx="9" cy="18" r="1" fill="currentColor" />
          <circle cx="15" cy="18" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Item Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[#fafafa] font-medium truncate">{item.name}</h3>
      </div>

      {/* Price */}
      <div className="text-[#22c55e] font-semibold tabular-nums">
        {formatPrice(item.price_cents)}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onEdit}
          className="p-3 text-[#a1a1a6] hover:text-[#fafafa] hover:bg-[#232326] rounded-xl transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Edit item"
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
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button
          onClick={onArchive}
          className="p-3 text-[#a1a1a6] hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Archive item"
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
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

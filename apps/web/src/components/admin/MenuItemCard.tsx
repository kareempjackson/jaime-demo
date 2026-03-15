'use client';

import { MenuItem } from '@/types/menu';
import { DragHandleIcon } from '@/components/icons/DragHandleIcon';
import { EditIcon } from '@/components/icons/EditIcon';
import { ArchiveIcon } from '@/components/icons/ArchiveIcon';
import { formatPrice } from '@/lib/utils/formatPrice';

interface MenuItemCardProps {
  item: MenuItem;
  onEdit: () => void;
  onArchive: () => void;
}

export function MenuItemCard({ item, onEdit, onArchive }: MenuItemCardProps) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 hover:bg-[#1c1c1f] transition-colors group">
      <div
        className="cursor-grab active:cursor-grabbing touch-none p-2 -m-2 text-[#6b6b70] hover:text-[#a1a1a6] transition-colors"
        aria-label="Drag to reorder"
      >
        <DragHandleIcon className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[#fafafa] font-medium truncate">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-[#6b6b70] truncate">{item.description}</p>
        )}
      </div>

      <div className="text-[#fafafa] font-semibold tabular-nums">
        {formatPrice(item.priceCents)}
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="p-3 rounded-lg text-[#a1a1a6] hover:text-[#fafafa] hover:bg-[#232326] transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label={`Edit ${item.name}`}
        >
          <EditIcon className="w-5 h-5" />
        </button>
        <button
          onClick={onArchive}
          className="p-3 rounded-lg text-[#a1a1a6] hover:text-[#ef4444] hover:bg-[#232326] transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label={`Archive ${item.name}`}
        >
          <ArchiveIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

import { MenuItem } from '@/types/order';
import { formatPrice } from '@/utils/formatPrice';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd: () => void;
}

export function MenuItemCard({ item, onAdd }: MenuItemCardProps) {
  return (
    <button
      onClick={onAdd}
      className="flex flex-col items-start p-4 bg-[#141416] rounded-xl border border-[#232326] hover:bg-[#1c1c1f] hover:border-[#2a2a2e] active:scale-[0.98] transition-all min-h-[120px] text-left"
    >
      <span className="text-[#fafafa] text-lg font-medium leading-tight mb-2">
        {item.name}
      </span>
      <span className="text-[#22c55e] text-xl font-semibold mt-auto">
        {formatPrice(item.priceCents)}
      </span>
    </button>
  );
}

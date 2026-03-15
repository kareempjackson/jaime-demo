import { Order, OrderStatus } from '@/types/order';
import { formatCents, formatTime } from '@/lib/utils/format';

interface OrderCardProps {
  order: Order;
  onClick: () => void;
}

export function OrderCard({ order, onClick }: OrderCardProps) {
  const isPending = order.status === OrderStatus.PENDING;
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      disabled={!isPending}
      className={`
        w-full text-left p-4 rounded-xl transition-all duration-200
        ${isPending
          ? 'bg-[#1c1c1f] hover:bg-[#2a2a2e] cursor-pointer active:scale-[0.98]'
          : 'bg-[#1c1c1f]/50 cursor-default opacity-75'
        }
      `}
      aria-label={`Order ${order.orderNumber}, ${itemCount} items, ${formatCents(order.totalCents)}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#fafafa]">
              #{order.orderNumber}
            </span>
            {isPending && (
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
            )}
          </div>
          <p className="text-[#6b6b70] text-sm mt-1">
            {formatTime(order.createdAt)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-[#22c55e]">
            {formatCents(order.totalCents)}
          </p>
          <p className="text-[#a1a1a6] text-sm">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>
    </button>
  );
}

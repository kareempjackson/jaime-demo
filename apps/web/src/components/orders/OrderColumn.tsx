import { Order } from '@/types/order';
import { OrderCard } from './OrderCard';

interface OrderColumnProps {
  title: string;
  orders: Order[];
  onOrderClick: (order: Order) => void;
  emptyMessage: string;
  accentColor: string;
}

export function OrderColumn({
  title,
  orders,
  onOrderClick,
  emptyMessage,
  accentColor,
}: OrderColumnProps) {
  return (
    <div className="bg-[#141416] rounded-2xl p-4 min-h-[60vh]">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#232326]">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <h2 className="text-xl font-semibold text-[#fafafa]">{title}</h2>
        <span className="ml-auto bg-[#232326] text-[#a1a1a6] px-3 py-1 rounded-full text-sm font-medium">
          {orders.length}
        </span>
      </div>

      <div className="space-y-3 max-h-[calc(60vh-80px)] overflow-y-auto">
        {orders.length === 0 ? (
          <div className="text-center py-12 text-[#6b6b70]">
            {emptyMessage}
          </div>
        ) : (
          orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onClick={() => onOrderClick(order)}
            />
          ))
        )}
      </div>
    </div>
  );
}

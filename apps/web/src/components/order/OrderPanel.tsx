'use client';

import { OrderItem } from '@/types/order';
import { OrderLineItem } from './OrderLineItem';
import { formatPrice } from '@/utils/formatPrice';

interface OrderPanelProps {
  items: OrderItem[];
  onUpdateQuantity: (menuItemId: string, delta: number) => void;
  onRemoveItem: (menuItemId: string) => void;
  onCompleteOrder: () => void;
  isSubmitting: boolean;
}

export function OrderPanel({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCompleteOrder,
  isSubmitting,
}: OrderPanelProps) {
  const totalCents = items.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );

  const hasItems = items.length > 0;

  return (
    <div className="flex flex-col h-full bg-[#141416]">
      <div className="px-4 py-4 border-b border-[#232326]">
        <h2 className="text-[#fafafa] text-xl font-semibold">Current Order</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2">
        {!hasItems ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-[#6b6b70] text-center">
              Tap menu items to add them to the order
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <OrderLineItem
                key={item.menuItemId}
                item={item}
                onIncrement={() => onUpdateQuantity(item.menuItemId, 1)}
                onDecrement={() => onUpdateQuantity(item.menuItemId, -1)}
                onRemove={() => onRemoveItem(item.menuItemId)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#232326] space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[#a1a1a6] text-lg">Total</span>
          <span className="text-[#fafafa] text-2xl font-bold">
            {formatPrice(totalCents)}
          </span>
        </div>

        <button
          onClick={onCompleteOrder}
          disabled={!hasItems || isSubmitting}
          className={`w-full py-4 rounded-xl text-lg font-semibold transition-all min-h-[56px] ${
            hasItems && !isSubmitting
              ? 'bg-[#22c55e] text-[#052e16] hover:bg-[#16a34a] active:scale-[0.98]'
              : 'bg-[#1c1c1f] text-[#6b6b70] cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Complete Order'}
        </button>
      </div>
    </div>
  );
}

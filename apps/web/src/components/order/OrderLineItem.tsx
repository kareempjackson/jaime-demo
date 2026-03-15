'use client';

import { useState } from 'react';
import { OrderItem } from '@/types/order';
import { formatPrice } from '@/utils/formatPrice';

interface OrderLineItemProps {
  item: OrderItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export function OrderLineItem({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: OrderLineItemProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchOffset, setTouchOffset] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  const lineTotal = item.priceCents * item.quantity;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.touches[0].clientX - touchStart;
    if (diff < 0) {
      setTouchOffset(Math.max(diff, -100));
    }
  };

  const handleTouchEnd = () => {
    if (touchOffset < -60) {
      setIsRemoving(true);
      setTimeout(onRemove, 200);
    } else {
      setTouchOffset(0);
    }
    setTouchStart(null);
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-y-0 right-0 w-20 bg-[#dc2626] flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>

      <div
        className={`relative bg-[#1c1c1f] p-3 rounded-lg transition-transform ${
          isRemoving ? 'translate-x-[-100%]' : ''
        }`}
        style={{ transform: `translateX(${touchOffset}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-[#fafafa] font-medium truncate">{item.name}</p>
            <p className="text-[#6b6b70] text-sm">
              {formatPrice(item.priceCents)} each
            </p>
          </div>

          <div className="flex items-center gap-2 mx-3">
            <button
              onClick={onDecrement}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#232326] text-[#fafafa] hover:bg-[#2a2a2e] active:scale-95 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="text-[#fafafa] font-semibold w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={onIncrement}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#232326] text-[#fafafa] hover:bg-[#2a2a2e] active:scale-95 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#22c55e] font-semibold min-w-[70px] text-right">
              {formatPrice(lineTotal)}
            </span>
            <button
              onClick={onRemove}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[#6b6b70] hover:text-[#dc2626] hover:bg-[#232326] transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

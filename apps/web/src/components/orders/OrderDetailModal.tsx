'use client';

import { useEffect, useRef } from 'react';
import { Order } from '@/types/order';
import { formatCents, formatTime } from '@/lib/utils/format';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface OrderDetailModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
  onMarkComplete: () => void;
  onCancelOrder: () => void;
  isLoading: boolean;
}

export function OrderDetailModal({
  order,
  isOpen,
  onClose,
  onMarkComplete,
  onCancelOrder,
  isLoading,
}: OrderDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [onClose]);

  if (!order) return null;

  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <dialog
      ref={dialogRef}
      className="bg-transparent p-0 m-0 max-w-none max-h-none w-full h-full backdrop:bg-black/70"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 flex items-center justify-center p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="bg-[#232326] rounded-2xl w-full max-w-md shadow-2xl">
          <div className="flex items-center justify-between p-6 border-b border-[#2a2a2e]">
            <div>
              <h2
                id="modal-title"
                className="text-2xl font-bold text-[#fafafa]"
              >
                Order #{order.orderNumber}
              </h2>
              <p className="text-[#6b6b70] mt-1">{formatTime(order.createdAt)}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1c1c1f] hover:bg-[#2a2a2e] transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6 text-[#a1a1a6]" />
            </button>
          </div>

          <div className="p-6 space-y-4 max-h-[40vh] overflow-y-auto">
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-[#1c1c1f] text-[#a1a1a6] w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium">
                      {item.quantity}x
                    </span>
                    <span className="text-[#fafafa] font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[#a1a1a6]">
                    {formatCents(item.priceCents * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-[#2a2a2e]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[#a1a1a6] text-sm">Total</span>
                <p className="text-2xl font-bold text-[#22c55e]">
                  {formatCents(order.totalCents)}
                </p>
              </div>
              <span className="text-[#6b6b70]">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onCancelOrder}
                disabled={isLoading}
                className="flex-1 min-h-[56px] px-6 rounded-xl bg-[#1c1c1f] text-[#fafafa] font-semibold hover:bg-[#2a2a2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel Order
              </button>
              <button
                onClick={onMarkComplete}
                disabled={isLoading}
                className="flex-1 min-h-[56px] px-6 rounded-xl bg-[#22c55e] text-[#0a0a0b] font-semibold hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-[#0a0a0b] border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Mark Complete'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

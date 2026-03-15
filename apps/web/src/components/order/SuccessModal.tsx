'use client';

import { useEffect } from 'react';

interface SuccessModalProps {
  orderNumber: string;
  onClose: () => void;
}

export function SuccessModal({ orderNumber, onClose }: SuccessModalProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="bg-[#232326] rounded-2xl p-8 max-w-sm w-full mx-4 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#22c55e]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-[#fafafa] text-2xl font-bold mb-2">Order Complete!</h2>
        <p className="text-[#a1a1a6] mb-4">Order number</p>
        <p className="text-[#22c55e] text-4xl font-bold mb-6">{orderNumber}</p>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#1c1c1f] text-[#fafafa] font-medium hover:bg-[#2a2a2e] transition-colors min-h-[48px]"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

'use client';

import { useEffect } from 'react';

interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  title,
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="relative bg-[#232326] rounded-2xl w-full max-w-sm shadow-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#fafafa] mb-3">{title}</h2>
          <p className="text-[#a1a1a6] leading-relaxed">{message}</p>
        </div>

        <div className="flex gap-3 p-6 pt-0">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-3 bg-[#1c1c1f] text-[#a1a1a6] font-medium rounded-xl hover:bg-[#2a2a2e] transition-colors min-h-[48px]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors min-h-[48px]"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

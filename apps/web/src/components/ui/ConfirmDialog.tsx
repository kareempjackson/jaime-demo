'use client';

import { Modal } from './Modal';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  variant?: 'danger' | 'default';
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isLoading = false,
  variant = 'danger',
}: ConfirmDialogProps) {
  const confirmButtonClass =
    variant === 'danger'
      ? 'bg-[#ef4444] hover:bg-[#dc2626]'
      : 'bg-[#22c55e] hover:bg-[#1ea550]';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#232326] rounded-2xl w-full max-w-sm mx-4 overflow-hidden shadow-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#fafafa] mb-2">{title}</h2>
          <p className="text-[#a1a1a6]">{message}</p>
        </div>

        <div className="flex gap-3 p-6 pt-0">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-6 py-3 bg-[#1c1c1f] border border-[#2a2a2e] text-[#a1a1a6] font-medium rounded-xl hover:bg-[#2a2a2e] hover:text-[#fafafa] transition-colors min-h-[48px] disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`flex-1 px-6 py-3 ${confirmButtonClass} text-[#fafafa] font-medium rounded-xl transition-colors min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isLoading ? 'Loading...' : confirmLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
}

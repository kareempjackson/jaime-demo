'use client';

interface ArchiveConfirmDialogProps {
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ArchiveConfirmDialog({
  itemName,
  onConfirm,
  onCancel,
}: ArchiveConfirmDialogProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-[#232326] rounded-2xl w-full max-w-sm shadow-2xl p-6">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19L19 7M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#fafafa] mb-2">Archive Item?</h2>
          <p className="text-[#a1a1a6]">
            Are you sure you want to archive <span className="text-[#fafafa] font-medium">"{itemName}"</span>?
          </p>
          <p className="text-[#6b6b70] text-sm mt-2">
            You can restore it later from the archived items section.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-3 bg-[#2a2a2e] text-[#fafafa] font-medium rounded-xl hover:bg-[#333338] transition-colors min-h-[48px]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors min-h-[48px]"
          >
            Archive
          </button>
        </div>
      </div>
    </div>
  );
}

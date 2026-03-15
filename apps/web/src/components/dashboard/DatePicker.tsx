'use client';

import { useRef } from 'react';

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().split('T')[0];

  const handleClick = () => {
    inputRef.current?.showPicker();
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex min-h-[48px] items-center gap-2 rounded-lg bg-[#141416] px-4 py-3 text-[#fafafa] transition-colors hover:bg-[#1c1c1f]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#a1a1a6]"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
        <span className="font-medium">
          {selectedDate === today
            ? 'Today'
            : new Date(selectedDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
        </span>
      </button>
      <input
        ref={inputRef}
        type="date"
        value={selectedDate}
        max={today}
        onChange={(e) => onDateChange(e.target.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
      />
    </div>
  );
}

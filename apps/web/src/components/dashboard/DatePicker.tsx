'use client';

import { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

function formatDisplayDate(date: Date): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const compareDate = new Date(date);
  compareDate.setHours(0, 0, 0, 0);
  
  if (compareDate.getTime() === today.getTime()) {
    return 'Today';
  }
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (compareDate.getTime() === yesterday.getTime()) {
    return 'Yesterday';
  }
  
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatInputDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    
    if (newDate <= today) {
      onDateChange(newDate);
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value + 'T12:00:00');
    if (!isNaN(newDate.getTime())) {
      onDateChange(newDate);
      setIsOpen(false);
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  const isToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(selectedDate);
    selected.setHours(0, 0, 0, 0);
    return selected.getTime() === today.getTime();
  };

  return (
    <div ref={containerRef} className="flex items-center gap-2">
      <button
        onClick={handlePrevDay}
        className="p-3 rounded-xl bg-[#141416] border border-[#232326] text-[#a1a1a6] hover:bg-[#1c1c1f] hover:text-[#fafafa] transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
        aria-label="Previous day"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="relative">
        <button
          onClick={handleButtonClick}
          className="px-4 py-3 rounded-xl bg-[#141416] border border-[#232326] text-[#fafafa] hover:bg-[#1c1c1f] transition-colors min-h-[48px] flex items-center gap-2 font-medium"
        >
          <svg className="w-5 h-5 text-[#a1a1a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formatDisplayDate(selectedDate)}
        </button>
        <input
          ref={inputRef}
          type="date"
          value={formatInputDate(selectedDate)}
          max={formatInputDate(new Date())}
          onChange={handleDateInputChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          aria-label="Select date"
        />
      </div>

      <button
        onClick={handleNextDay}
        disabled={isToday()}
        className={`p-3 rounded-xl bg-[#141416] border border-[#232326] transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center ${
          isToday()
            ? 'text-[#6b6b70] cursor-not-allowed'
            : 'text-[#a1a1a6] hover:bg-[#1c1c1f] hover:text-[#fafafa]'
        }`}
        aria-label="Next day"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

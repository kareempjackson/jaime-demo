'use client';

import { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

export function DatePicker({ selectedDate, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());
  const [viewYear, setViewYear] = useState(selectedDate.getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDisplayDate = (date: Date): string => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    }
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined,
    });
  };

  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewYear, viewMonth, day);
    onChange(newDate);
    setIsOpen(false);
  };

  const isDateDisabled = (day: number): boolean => {
    const date = new Date(viewYear, viewMonth, day);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return date > today;
  };

  const isSelectedDate = (day: number): boolean => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear
    );
  };

  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === viewMonth &&
      today.getFullYear() === viewYear
    );
  };

  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDay = getFirstDayOfMonth(viewMonth, viewYear);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#141416] hover:bg-[#1c1c1f] text-[#fafafa] px-4 py-3 rounded-xl transition-colors min-h-[48px]"
      >
        <svg className="w-5 h-5 text-[#a1a1a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-medium">{formatDisplayDate(selectedDate)}</span>
        <svg className={`w-4 h-4 text-[#6b6b70] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-[#141416] rounded-2xl shadow-2xl border border-[#232326] p-4 z-50 w-[320px]">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-[#1c1c1f] rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-[#a1a1a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[#fafafa] font-semibold">
              {monthNames[viewMonth]} {viewYear}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-[#1c1c1f] rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-[#a1a1a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-[#6b6b70] text-xs font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {blanks.map((blank) => (
              <div key={`blank-${blank}`} className="h-10" />
            ))}
            {days.map((day) => {
              const disabled = isDateDisabled(day);
              const selected = isSelectedDate(day);
              const today = isToday(day);

              return (
                <button
                  key={day}
                  onClick={() => !disabled && handleDateSelect(day)}
                  disabled={disabled}
                  className={`h-10 w-full rounded-lg text-sm font-medium transition-colors flex items-center justify-center
                    ${disabled ? 'text-[#3a3a3d] cursor-not-allowed' : ''}
                    ${selected ? 'bg-[#22c55e] text-[#0a0a0b]' : ''}
                    ${!selected && !disabled ? 'hover:bg-[#1c1c1f] text-[#fafafa]' : ''}
                    ${today && !selected ? 'ring-1 ring-[#22c55e]' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-[#232326]">
            <button
              onClick={() => {
                const today = new Date();
                onChange(today);
                setViewMonth(today.getMonth());
                setViewYear(today.getFullYear());
                setIsOpen(false);
              }}
              className="flex-1 py-2 text-sm font-medium text-[#22c55e] hover:bg-[#22c55e]/10 rounded-lg transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                onChange(yesterday);
                setViewMonth(yesterday.getMonth());
                setViewYear(yesterday.getFullYear());
                setIsOpen(false);
              }}
              className="flex-1 py-2 text-sm font-medium text-[#a1a1a6] hover:bg-[#1c1c1f] rounded-lg transition-colors"
            >
              Yesterday
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { forwardRef } from 'react';

/**
 * Input Component
 * 
 * For forms, search bars, and data entry
 */
export const Input = forwardRef(function Input(
  {
    label,
    error,
    hint,
    leftIcon,
    rightIcon,
    size = 'md',
    className = '',
    ...props
  },
  ref
) {
  const baseStyles = `
    w-full
    border border-neutral-300
    bg-white
    text-neutral-900
    placeholder:text-neutral-400
    transition-all duration-200
    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100
    disabled:bg-neutral-100 disabled:cursor-not-allowed
  `;

  const errorStyles = error
    ? 'border-error focus:border-error focus:ring-error-light'
    : '';

  const sizes = {
    sm: 'text-sm px-3 py-2 rounded-lg',
    md: 'text-base px-4 py-2.5 rounded-xl',
    lg: 'text-lg px-4 py-3 rounded-xl',
  };

  const iconPadding = {
    left: leftIcon ? 'pl-10' : '',
    right: rightIcon ? 'pr-10' : '',
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`${baseStyles} ${sizes[size]} ${iconPadding.left} ${iconPadding.right} ${errorStyles} ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {rightIcon}
          </div>
        )}
      </div>
      {hint && !error && (
        <p className="text-sm text-neutral-500">{hint}</p>
      )}
      {error && (
        <p className="text-sm text-error flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
});

/**
 * SearchInput Component
 * Specialized input for search functionality
 */
export function SearchInput({ placeholder = 'Search...', className = '', ...props }) {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      leftIcon={
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
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      }
      className={className}
      {...props}
    />
  );
}

export default Input;
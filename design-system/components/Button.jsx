import React from 'react';

/**
 * Button Component
 * 
 * Variants: primary, secondary, outline, ghost
 * Sizes: sm, md, lg
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-primary-500 text-white
      hover:bg-primary-600 hover:shadow-primary
      focus:ring-primary-500
      active:bg-primary-700
    `,
    secondary: `
      bg-secondary-500 text-white
      hover:bg-secondary-600 hover:shadow-secondary
      focus:ring-secondary-500
      active:bg-secondary-700
    `,
    outline: `
      bg-transparent border-2 border-primary-500 text-primary-600
      hover:bg-primary-50
      focus:ring-primary-500
      active:bg-primary-100
    `,
    ghost: `
      bg-transparent text-primary-600
      hover:bg-primary-50
      focus:ring-primary-500
      active:bg-primary-100
    `,
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-lg gap-1.5',
    md: 'text-base px-4 py-2.5 rounded-xl gap-2',
    lg: 'text-lg px-6 py-3 rounded-xl gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
}

export default Button;
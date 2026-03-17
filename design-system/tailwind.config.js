/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0b',
          secondary: '#141416',
          tertiary: '#1c1c1f',
          elevated: '#232326',
          hover: '#2a2a2e',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1a6',
          muted: '#6b6b70',
        },
        accent: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          muted: 'rgba(34, 197, 94, 0.15)',
        },
        error: {
          DEFAULT: '#ef4444',
          muted: 'rgba(239, 68, 68, 0.15)',
        },
        warning: '#f59e0b',
        border: {
          DEFAULT: '#2a2a2e',
          focus: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        price: ['24px', { lineHeight: '1.25', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.5' }],
      },
      spacing: {
        'touch': '48px',
        'touch-lg': '56px',
      },
      minHeight: {
        'touch': '48px',
        'touch-lg': '56px',
      },
      minWidth: {
        'touch': '48px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.5)',
        'modal': '0 8px 24px rgba(0, 0, 0, 0.6)',
      },
      transitionDuration: {
        fast: '100ms',
        base: '150ms',
      },
    },
  },
  plugins: [],
};
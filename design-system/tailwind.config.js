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
        border: {
          subtle: '#2a2a2e',
          DEFAULT: '#3a3a3f',
          strong: '#4a4a50',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1a6',
          muted: '#6b6b70',
          inverse: '#0a0a0b',
        },
        accent: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          muted: 'rgba(34, 197, 94, 0.15)',
        },
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        price: ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
      },
      spacing: {
        'touch-min': '48px',
        'touch-comfortable': '56px',
        'touch-large': '64px',
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
        md: '0 4px 12px rgba(0, 0, 0, 0.5)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.6)',
        glow: '0 0 20px rgba(34, 197, 94, 0.3)',
      },
      transitionDuration: {
        fast: '100ms',
        base: '150ms',
        slow: '300ms',
      },
    },
  },
  plugins: [],
}
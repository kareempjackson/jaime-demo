/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* =========================================
         COLORS
         ========================================= */
      colors: {
        // Primary - Vibrant Orange
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Secondary - Fresh Green
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Accent - Tropical Yellow
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Fruit Palette
        fruit: {
          strawberry: '#dc2626',
          watermelon: '#f43f5e',
          mango: '#fbbf24',
          pineapple: '#fde047',
          kiwi: '#84cc16',
          apple: '#22c55e',
          mint: '#2dd4bf',
          blueberry: '#6366f1',
          grape: '#a855f7',
          acai: '#7c3aed',
        },
        // Backgrounds
        cream: '#fffbeb',
        mintbg: '#f0fdf4',
      },

      /* =========================================
         TYPOGRAPHY
         ========================================= */
      fontFamily: {
        display: ['Fredoka', 'Nunito', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },

      /* =========================================
         SPACING
         ========================================= */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      /* =========================================
         BORDER RADIUS
         ========================================= */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* =========================================
         BOX SHADOW
         ========================================= */
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(249, 115, 22, 0.3)',
        'secondary': '0 4px 14px 0 rgba(34, 197, 94, 0.3)',
        'accent': '0 4px 14px 0 rgba(234, 179, 8, 0.3)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.4)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.4)',
      },

      /* =========================================
         ANIMATIONS
         ========================================= */
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'squeeze': 'squeeze 0.3s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        squeeze: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
      },

      /* =========================================
         BACKGROUND IMAGE
         ========================================= */
      backgroundImage: {
        'gradient-fresh': 'linear-gradient(135deg, #4ade80, #16a34a)',
        'gradient-tropical': 'linear-gradient(135deg, #fb923c, #facc15)',
        'gradient-berry': 'linear-gradient(135deg, #dc2626, #a855f7)',
        'gradient-citrus': 'linear-gradient(135deg, #f97316, #fde047)',
        'gradient-ocean': 'linear-gradient(135deg, #2dd4bf, #6366f1)',
        'pattern-dots': 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)',
        'pattern-fruit': 'url("/patterns/fruit-pattern.svg")',
      },

      /* =========================================
         TRANSITIONS
         ========================================= */
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Custom plugin for juice bar specific utilities
    function({ addUtilities, addComponents }) {
      addUtilities({
        '.text-gradient-juice': {
          'background': 'linear-gradient(135deg, #f97316, #facc15)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-fresh': {
          'background': 'linear-gradient(135deg, #22c55e, #4ade80)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
      addComponents({
        '.btn-juice': {
          '@apply px-6 py-3 bg-primary-500 text-white font-semibold rounded-2xl shadow-primary hover:bg-primary-600 hover:shadow-lg transition-all duration-200 active:scale-95': {},
        },
        '.btn-fresh': {
          '@apply px-6 py-3 bg-secondary-500 text-white font-semibold rounded-2xl shadow-secondary hover:bg-secondary-600 hover:shadow-lg transition-all duration-200 active:scale-95': {},
        },
        '.card-juice': {
          '@apply bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300': {},
        },
        '.badge-fruit': {
          '@apply inline-flex items-center px-3 py-1 rounded-full text-sm font-medium': {},
        },
      })
    },
  ],
}
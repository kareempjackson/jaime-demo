/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Colors - Juice Bar Theme
      colors: {
        // Primary - Orange (Energy & Freshness)
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          DEFAULT: 'var(--color-primary-500)',
        },
        // Secondary - Green (Health & Natural)
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
          DEFAULT: 'var(--color-secondary-500)',
        },
        // Accent - Yellow (Sunshine & Citrus)
        accent: {
          50: 'var(--color-accent-50)',
          100: 'var(--color-accent-100)',
          200: 'var(--color-accent-200)',
          300: 'var(--color-accent-300)',
          400: 'var(--color-accent-400)',
          500: 'var(--color-accent-500)',
          600: 'var(--color-accent-600)',
          700: 'var(--color-accent-700)',
          800: 'var(--color-accent-800)',
          900: 'var(--color-accent-900)',
          950: 'var(--color-accent-950)',
          DEFAULT: 'var(--color-accent-500)',
        },
        // Fruit accent colors
        berry: {
          DEFAULT: 'var(--color-berry)',
          light: 'var(--color-berry-light)',
        },
        tropical: {
          DEFAULT: 'var(--color-tropical)',
          light: 'var(--color-tropical-light)',
        },
        grape: {
          DEFAULT: 'var(--color-grape)',
          light: 'var(--color-grape-light)',
        },
        // Semantic colors
        success: {
          DEFAULT: 'var(--color-success)',
          light: 'var(--color-success-light)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          light: 'var(--color-warning-light)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          light: 'var(--color-error-light)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          light: 'var(--color-info-light)',
        },
      },
      
      // Typography
      fontFamily: {
        display: ['Fredoka', 'Comic Sans MS', 'cursive', 'sans-serif'],
        body: ['Nunito', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      
      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
        'juice': '2rem', // Custom rounded for juice cards
      },
      
      // Box Shadow
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-default)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'inner': 'var(--shadow-inner)',
        'none': 'var(--shadow-none)',
        'orange': 'var(--shadow-orange)',
        'green': 'var(--shadow-green)',
        'yellow': 'var(--shadow-yellow)',
        'juice': '0 8px 30px rgb(249 115 22 / 0.2)',
      },
      
      // Transitions
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Z-Index
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'dropdown': '100',
        'sticky': '200',
        'fixed': '300',
        'modal-backdrop': '400',
        'modal': '500',
        'popover': '600',
        'tooltip': '700',
        'toast': '800',
      },
      
      // Container
      maxWidth: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-soft': 'bounceSoft 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'blend': 'blend 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blend: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      
      // Background patterns
      backgroundImage: {
        'gradient-juice': 'linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-accent-400) 100%)',
        'gradient-fresh': 'linear-gradient(135deg, var(--color-secondary-400) 0%, var(--color-accent-400) 100%)',
        'gradient-berry': 'linear-gradient(135deg, var(--color-berry) 0%, var(--color-grape) 100%)',
        'gradient-tropical': 'linear-gradient(135deg, var(--color-tropical) 0%, var(--color-secondary-400) 100%)',
        'pattern-dots': 'radial-gradient(circle, var(--color-primary-200) 1px, transparent 1px)',
      },
    },
  },
  plugins: [
    // Custom plugin for juice bar specific utilities
    function({ addUtilities, addComponents, theme }) {
      // Utility classes
      addUtilities({
        '.text-gradient-juice': {
          'background': 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-accent-500) 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.5)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
      
      // Component classes
      addComponents({
        '.btn-juice': {
          'padding': '0.75rem 1.5rem',
          'background': 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%)',
          'color': 'white',
          'font-weight': '600',
          'border-radius': '1rem',
          'box-shadow': '0 4px 14px 0 rgb(249 115 22 / 0.3)',
          'transition': 'all 0.2s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 6px 20px 0 rgb(249 115 22 / 0.4)',
          },
          '&:active': {
            'transform': 'translateY(0)',
          },
        },
        '.btn-fresh': {
          'padding': '0.75rem 1.5rem',
          'background': 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-secondary-600) 100%)',
          'color': 'white',
          'font-weight': '600',
          'border-radius': '1rem',
          'box-shadow': '0 4px 14px 0 rgb(34 197 94 / 0.3)',
          'transition': 'all 0.2s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 6px 20px 0 rgb(34 197 94 / 0.4)',
          },
        },
        '.card-juice': {
          'background': 'white',
          'border-radius': '1.5rem',
          'padding': '1.5rem',
          'box-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'box-shadow': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            'transform': 'translateY(-4px)',
          },
        },
        '.input-juice': {
          'width': '100%',
          'padding': '0.75rem 1rem',
          'border': '2px solid var(--color-border-light)',
          'border-radius': '0.75rem',
          'font-size': '1rem',
          'transition': 'all 0.2s ease',
          '&:focus': {
            'outline': 'none',
            'border-color': 'var(--color-primary-500)',
            'box-shadow': '0 0 0 3px rgb(249 115 22 / 0.1)',
          },
        },
      });
    },
  ],
};
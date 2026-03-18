/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===========================================
      // COLORS
      // ===========================================
      colors: {
        // Primary Green - Fresh & Healthy
        primary: {
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
          DEFAULT: '#22c55e',
        },
        // Secondary Orange - Energetic & Citrus
        secondary: {
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
          DEFAULT: '#f97316',
        },
        // Accent Yellow - Sunshine & Tropical
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
          DEFAULT: '#facc15',
        },
        // Fruit Category Colors
        berry: {
          DEFAULT: '#dc2626',
          light: '#fecaca',
        },
        tropical: {
          DEFAULT: '#0891b2',
          light: '#cffafe',
        },
        citrus: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
        },
        leafy: {
          DEFAULT: '#16a34a',
          light: '#dcfce7',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#22c55e',
          light: '#dcfce7',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fee2e2',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#dbeafe',
        },
      },
      
      // ===========================================
      // TYPOGRAPHY
      // ===========================================
      fontFamily: {
        display: ['Fredoka', 'Comic Sans MS', 'cursive', 'sans-serif'],
        heading: ['Nunito', 'Segoe UI', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      
      fontSize: {
        'display-lg': ['3.75rem', { lineHeight: '1', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      
      // ===========================================
      // SPACING
      // ===========================================
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      
      // ===========================================
      // BORDER RADIUS
      // ===========================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // ===========================================
      // BOX SHADOW
      // ===========================================
      boxShadow: {
        'glow-green': '0 0 20px rgb(34 197 94 / 0.3)',
        'glow-orange': '0 0 20px rgb(249 115 22 / 0.3)',
        'glow-yellow': '0 0 20px rgb(250 204 21 / 0.3)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
      },
      
      // ===========================================
      // ANIMATIONS
      // ===========================================
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      // ===========================================
      // BACKGROUND IMAGES
      // ===========================================
      backgroundImage: {
        'gradient-fresh': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        'gradient-tropical': 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
        'gradient-citrus': 'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
        'gradient-primary': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 50%, #fff7ed 100%)',
      },
    },
  },
  plugins: [],
};
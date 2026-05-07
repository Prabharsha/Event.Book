/** @type {import('tailwindcss').Config} */
import { withUt } from 'uploadthing/tw';

module.exports = withUt({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          500: '#a52e45',
          50: '#fdf5f7',
          DEFAULT: '#a52e45',
          foreground: '#ffffff',
        },
        navy: {
          DEFAULT: '#2b5278',
          500: '#2b5278',
          600: '#1e3a57',
          50: '#f0f4f8',
        },
        teal: {
          DEFAULT: '#61787b',
          500: '#61787b',
          50: '#eef2f2',
        },
        cream: {
          DEFAULT: '#ead8b1',
          500: '#ead8b1',
          50: '#faf6ed',
        },
        terra: {
          DEFAULT: '#bf5c45',
          500: '#bf5c45',
        },
        grey: {
          600: '#545454',
          500: '#757575',
          400: '#AFAFAF',
          50: '#F6F6F6',
        },
        black: '#000000',
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'dotted-pattern': "url('/assets/images/dotted-pattern.png')",
        'hero-img': "url('/assets/images/hero.png')",
        'crimson-terra': 'linear-gradient(135deg, #a52e45, #bf5c45)',
        'navy-teal': 'linear-gradient(135deg, #2b5278, #61787b)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        crimson: '0 4px 16px rgba(165, 46, 69, 0.34)',
        navy: '0 4px 24px rgba(43, 82, 120, 0.32)',
        card: '0 2px 16px rgba(43, 82, 120, 0.10)',
        'card-hover': '0 8px 32px rgba(43, 82, 120, 0.20)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
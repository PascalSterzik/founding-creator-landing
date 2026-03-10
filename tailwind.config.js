/** @type {import('tailwindcss').Config} */
const brand = require('./brand.config')

module.exports = {
  content: [
    './src/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: brand.colors.primary,
          'primary-dark': brand.colors.primaryDark,
          'primary-light': brand.colors.primaryLight,
          secondary: brand.colors.secondary,
          accent: brand.colors.accent,
          dark: brand.colors.dark,
          light: brand.colors.light,
          muted: brand.colors.muted,
        },
        cb: {
          bg: brand.colors.bg,
          'bg-warm': brand.colors.bgWarm,
          'bg-ivory': brand.colors.bgIvory,
          text: brand.colors.text,
          'text-secondary': brand.colors.textSecondary,
          'text-muted': brand.colors.textMuted,
          gold: brand.colors.gold,
          'gold-dark': brand.colors.goldDark,
          cocoa: brand.colors.cocoa,
          'cocoa-deep': brand.colors.cocoaDeep,
        },
      },
      fontFamily: {
        heading: [brand.fonts.heading, ...brand.fonts.headingFallback],
        body: [brand.fonts.body, ...brand.fonts.bodyFallback],
      },
      borderRadius: {
        brand: brand.style.borderRadius,
        sm: '12px',
        md: '20px',
        lg: '28px',
        xl: '40px',
        pill: '100px',
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(75, 50, 45, 0.06)',
        'brand-md': '0 8px 32px rgba(75, 50, 45, 0.08)',
        'brand-lg': '0 20px 60px rgba(75, 50, 45, 0.12)',
        'brand-glow': '0 0 40px rgba(201, 140, 131, 0.15)',
      },
    },
  },
  plugins: [],
}

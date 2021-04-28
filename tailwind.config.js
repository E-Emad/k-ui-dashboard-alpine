const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        light: {
          bg: 'var(--color-light-bg)',
          'text-contrast-high': 'var(--color-light-text-contrast-high)',
          'text-contrast-medium': 'var(--color-light-text-contrast-medium)',
          'text-contrast-low': 'var(--color-light-text-contrast-low)',
          'text-highlight': 'var(--color-light-text-highlight)',
        },
        dark: {
          bg: 'var(--color-dark-bg)',
          'elevation-1': 'var(--color-dark-elevation-1)',
          'elevation-2': 'var(--color-dark-elevation-2)',
          'elevation-3': 'var(--color-dark-elevation-3)',
          'elevation-4': 'var(--color-dark-elevation-4)',
          'elevation-5': 'var(--color-dark-elevation-5)',
          'elevation-6': 'var(--color-dark-elevation-6)',
          'text-contrast-high': 'var(--color-dark-text-contrast-high)',
          'text-contrast-medium': 'var(--color-dark-text-contrast-medium)',
          'text-contrast-low': 'var(--color-dark-text-contrast-low)',
          'text-highlight': 'var(--color-dark-text-highlight)',
        },
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {
      overflow: ['hover'],
    },
  },
  plugins: [],
}

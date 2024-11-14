/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#0D0D0D',
        white: '#FFFFFF',
        gray: '#595959',
        'gray-dark': '#262626',
        'gray-light': '#A6A6A6',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },

  plugins: [],
};

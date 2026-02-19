/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4d3e',
        'primary-light': '#2d6a55',
        'primary-dark': '#122e25',
        accent: '#34d399',
        terracotta: '#C4623A',
        'terracotta-dark': '#a8512f',
      },
    },
  },
  plugins: [],
}

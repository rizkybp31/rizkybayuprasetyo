/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#264653',
        'secondary': '#006D77',
        'tertiary': '#D9D9D9',
        'dark': '#272727',
        'light': '#FFFBF5',
        'semi-light': '#F6C6EA',
        'gray': '#DDDDDD'
      }
    },
  },
  plugins: [],
}
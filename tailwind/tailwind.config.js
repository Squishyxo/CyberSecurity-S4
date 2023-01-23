/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: 'Proxima Nova',
    container: {
      center: true
    },
    extend: {
      colors: {
        'light': '#282828',
        'dark': '#121212',
        'green': '#1DB954',
        'lightest': '#B3B3B3',
        'darkest': '#191414',
      }
    },
  },
  plugins: [],
}

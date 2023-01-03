/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': {
        'base': '#C20000',
        'strong': '#8F0202',
        'light': '#E53A2F',
      },
      'white': '#FFFFFF',
      'gray': {
        'base': '#F0F0F0',
        'bg': '#FEFEFE'
      },
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}
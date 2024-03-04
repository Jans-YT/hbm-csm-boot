/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss'),
  require('autoprefixer'),
],
}


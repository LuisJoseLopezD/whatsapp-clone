const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
    container: {
      center: true
    },
  },
  variants: {},
  plugins: [],
  purge: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  }

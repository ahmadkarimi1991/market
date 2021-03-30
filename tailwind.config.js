const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['public/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#CE2D4F'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

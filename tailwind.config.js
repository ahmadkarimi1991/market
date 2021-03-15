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
        },
        orange: colors.orange,
        lime: colors.lime,
        cyan: colors.cyan,
        blue: colors.lightBlue
      },
      fontSize: {
        '2xs': '.625rem'
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

const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grape: colors.purple,
      },
      fontFamily: {
        roboto: ["roboto-condensed", "sans-serif"],
        cabin: ["cabin", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {},
  },
}

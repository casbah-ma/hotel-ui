const defaultTheme = require('tailwindcss/defaultTheme')
const merge = require('deepmerge')

const fonts = {
  primary: ['DAHILA', 'sans-serif'],
  secondary: ['Raleway', 'sans-serif'],
  indie: ['Indie Flower', 'cursive'],
}

const hotelUiTailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/swiper/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  important: true,
  theme: {
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
      sm: '414px',
    },
    extend: {
      columns: {
        '4xs': '5rem',
      },
      boxShadow: {
        card: '2px 4px 24px 10px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: fonts,
    },
  },
}

function withHotelUi(tailwindConfig) {
  return merge(hotelUiTailwindConfig, { ...tailwindConfig })
}

module.exports = withHotelUi

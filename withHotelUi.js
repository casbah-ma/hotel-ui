const defaultTheme = require('tailwindcss/defaultTheme')
const merge = require('deepmerge')

const fonts = {
  primary: ['DAHILA', 'sans-serif'],
  secondary: ['Raleway', 'sans-serif'],
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
      xs: { max: '568px' },
      sm: '390px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: fonts,
    },
  },
}

function withHotelUi(tailwindConfig) {
  return merge(hotelUiTailwindConfig, { ...tailwindConfig })
}

module.exports = withHotelUi

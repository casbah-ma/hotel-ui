const withHotelUi = require('./withHotelUi')

module.exports = withHotelUi({
  theme: {},
  plugins: [require('tailwind-scrollbar-hide')],
})

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
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
      boxShadow: {
        card: '2px 4px 24px 10px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        primary: ['DAHILA', 'sans-serif'],
        secondary: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        tertiary: '#fafafa',
        additional: '#00bcd4',
        colorgrey: 'rgba(250,250,250, 0.08)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

import 'react-dates/initialize'
import * as NextImage from 'next/image'
//Next router
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { WithNextRouter } from 'storybook-addon-next-router/dist/decorators'
//styles
import '@/styles/global.css'
// import '@/styles/datepicker.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'swiper/css'
import 'swiper/css/navigation'
import GlobalStyles from '@/components/GlobalStyles'
import HotelUiProvider from '@/components/HotelUiProvider'
//
// import 'mapbox-gl/dist/mapbox-gl.css'
import 'twin.macro'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: 'en',
  },
}

export const decorators = [
  WithNextRouter,
  (Story) => (
    <HotelUiProvider>
      <GlobalStyles />
      <Story />
    </HotelUiProvider>
  ),
]

export const globalTypes = {
  darkMode: true,
}

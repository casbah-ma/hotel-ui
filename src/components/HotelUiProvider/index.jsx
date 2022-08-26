import { ThemeProvider } from 'styled-components'
import defaultTheming from '../../../theme'

const HotelUiProvider = ({ theme, children }) => {
  const combineTheming = (theme) => {
    if (theme) {
      return {
        ...defaultTheming,
        ...theme,
      }
    } else return defaultTheming
  }

  return <ThemeProvider theme={combineTheming(theme)}>{children}</ThemeProvider>
}

export default HotelUiProvider

import { ThemeProvider } from 'styled-components'
import defaultTheming from '../../../theme'

const HotelUiProvider = ({ theme, children }) => {
  const combineTheming = {
    ...defaultTheming,
    ...theme,
  }
  return <ThemeProvider theme={combineTheming}>{children}</ThemeProvider>
}

export default HotelUiProvider

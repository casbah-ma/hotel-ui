import { ThemeProvider } from 'styled-components'
import defaultTheming from '../../../theme'

const HotelUiProvider = ({ theme, children }) => {
  const combineTheming = {
    ...defaultTheming,
    ...theme,
  }
  console.log('theme', combineTheming)
  return <ThemeProvider theme={combineTheming}>{children}</ThemeProvider>
}

export default HotelUiProvider

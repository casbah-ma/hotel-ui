import { ThemeProvider } from 'styled-components'

const HotelUiProvider = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default HotelUiProvider

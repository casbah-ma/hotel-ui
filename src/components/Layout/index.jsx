import { LayoutContainer, LayoutContent } from './Layout.styles'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { CloudinaryContext } from 'cloudinary-react'

const Layout = ({ children, navbarProps, footerProps }) => {
  return (
    <LayoutContainer data-testid="layout-container">
      <Navbar {...navbarProps} />
      <LayoutContent>{children}</LayoutContent>
      <Footer {...footerProps} />
    </LayoutContainer>
  )
}

export default Layout

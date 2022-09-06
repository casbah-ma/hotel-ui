import { LayoutContainer, LayoutContent } from './Layout.styles'
import Footer from '@/components/Footers/Footer'
import Navbar from '@/components/Navbars/Navbar'
import Navbar_v2 from '@/components/Navbars/Navbar_v2'
import PropTypes from 'prop-types'

const Layout = ({ navVariant, children, navbarProps, footerProps }) => {
  return (
    <LayoutContainer data-testid="layout-container">
      {(!navVariant || navVariant === 'v1') && <Navbar {...navbarProps} />}
      {navVariant === 'v2' && <Navbar_v2 {...navbarProps} />}
      <LayoutContent>{children}</LayoutContent>
      <Footer {...footerProps} />
    </LayoutContainer>
  )
}

Layout.defaultProps = {
  navVariant: 'v1',
}

Layout.propTypes = {
  navVariant: PropTypes.oneOf(['v1', 'v2']),
  children: PropTypes.node.isRequired,
  navbarProps: PropTypes.object,
  footerProps: PropTypes.object,
}

export default Layout

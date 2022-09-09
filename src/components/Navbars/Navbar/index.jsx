import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
//components
import Link from '@/components/LinkComponent'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import Modal from '@/components/Modal'
//styles
import {
  List,
  ListItem,
  Logo,
  Menu,
  MobileItem,
  MobileList,
  MobileLogo,
  MobileNav,
  Nav,
  NavbarContainer,
} from './Navbar.styles'
//helpers
import { isEmpty, bookNow } from '@/helpers/utils'
import { useBreakpoint, useScrollPosition, useScrollDirection } from '@/hooks'
//icons
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

function Navbar({
  links,
  languages,
  defaultLanguage,
  actionProps,
  color = 'white',
  bgColor = 'black',
  logo,
  bookingUrl,
  t,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBackground, setHasBackground] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  let bp = useBreakpoint()

  const hadnleClose = () => {
    setIsOpen(false)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }

  // close the menu if we are in large view
  useEffect(() => {
    if ((bp = 'lg')) setIsOpen(false)
  }, [bp])

  //change the navbar on scroll
  const scrollPosition = useScrollPosition()
  const scrollDirection = useScrollDirection()
  useEffect(() => {
    if (scrollPosition > 100) {
      setHasBackground(true)
    } else {
      setHasBackground(false)
    }

    if (scrollDirection === 'down') {
      setIsHidden(true)
    } else if (scrollDirection === 'up') {
      setIsHidden(false)
    }
  }, [scrollPosition, scrollDirection])

  //split the links array into two parts
  const getLinks = (array) => {
    const n = Math.floor(array?.length / 2)
    const firstLinks = array?.slice(0, n)
    const secondLinks = array?.slice(n)
    return { firstLinks, secondLinks }
  }
  const { firstLinks, secondLinks } = getLinks(links)

  return (
    <>
      <NavbarContainer isHidden={isHidden} hasBackground={hasBackground}>
        <Dropdown languages={languages} defaultLanguage={defaultLanguage} />
        <Nav>
          <List position="left">
            {!isEmpty(firstLinks) &&
              firstLinks.map((item) => (
                <ListItem data-testid="navbar-item" key={item.link}>
                  <Link
                    href={item.link}
                    languages={languages}
                    defaultLanguage={defaultLanguage}
                  >
                    <Label labelText={t(item.label)} fontSize="sm" />
                  </Link>
                </ListItem>
              ))}
          </List>
          <Link
            href="/"
            languages={languages}
            defaultLanguage={defaultLanguage}
          >
            <Logo>
              <Image role="img" alt="logo" src={logo} width={170} height={48} />
            </Logo>
          </Link>
          <List position="right">
            {!isEmpty(secondLinks) &&
              secondLinks.map((item) => (
                <ListItem data-testid="navbar-item" key={item.link}>
                  <Link
                    href={item.link}
                    languages={languages}
                    defaultLanguage={defaultLanguage}
                  >
                    <Label labelText={t(item.label)} fontSize="sm" />
                  </Link>
                </ListItem>
              ))}
          </List>
        </Nav>
        <Button {...actionProps} handleClick={() => bookNow(bookingUrl)} />
      </NavbarContainer>
      {!isOpen && (
        <Menu onClick={handleOpen} aria-label="hamburger menu">
          <Bars3BottomRightIcon />
        </Menu>
      )}
      <Link href="/" languages={languages} defaultLanguage={defaultLanguage}>
        <MobileLogo>
          <Image role="img" alt="hero" src={logo} width={120} height={40} />
        </MobileLogo>
      </Link>
      <Modal isOpen={isOpen} closeModal={hadnleClose}>
        <MobileNav>
          <MobileList>
            {!isEmpty(links) &&
              links.map((item) => (
                <MobileItem key={item.link}>
                  <Link
                    href={item.link}
                    languages={languages}
                    defaultLanguage={defaultLanguage}
                  >
                    <Label labelText={t(item.label)} fontSize="sm" />
                  </Link>
                </MobileItem>
              ))}
          </MobileList>
          <Dropdown languages={languages} defaultLanguage={defaultLanguage} />
        </MobileNav>
      </Modal>
    </>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  t: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired,
  defaultLaguage: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  actionProps: PropTypes.shape({ ...Button.propTypes }),
}

export default Navbar

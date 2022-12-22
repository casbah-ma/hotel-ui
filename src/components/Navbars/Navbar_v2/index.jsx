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
  ListItem,
  Nav,
  NavbarContainer,
  Menu,
  ImageContainer,
} from './Navbar_v2.styles'
//helpers
import { isEmpty, bookNow } from '@/helpers/utils'
import { useBreakpoint, useScrollPosition, useScrollDirection } from '@/hooks'
//icons
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { Bars2Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import {
  ButtonWithLanguages,
  LanguageMenu,
  LinksList,
} from './Navbar_v2.styles'

function Navbar_v2({
  transparent = false,
  links,
  languages,
  defaultLanguage,
  actionProps,
  color,
  bgColor,
  logo,
  bookingUrl,
  t,
  width = 0,
  height = 0,
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
    const delta = 20
    if (scrollPosition > 100) {
      setHasBackground(true)
      // transparent ? (actionProps.border = true) : ''
    } else {
      setHasBackground(false)
      // actionProps.border = false
    }

    if (scrollDirection === 'down' && scrollPosition > delta) {
      setIsHidden(true)
    } else if (scrollDirection === 'up') {
      setIsHidden(false)
    }
  }, [scrollPosition, scrollDirection])

  return (
    <NavbarContainer
      bgColor={hasBackground ? bgColor : ''}
      color={color}
      isHidden={isHidden}
      hasBackground={hasBackground}
      transparent={transparent}
    >
      <Link
        isLogo={true}
        href="/"
        languages={languages}
        defaultLanguage={defaultLanguage}
      >
        <ImageContainer width={width} height={height}>
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </ImageContainer>
      </Link>
      <Nav>
        <LinksList>
          {!isEmpty(links) &&
            links.map((item) => (
              <ListItem key={item.link} data-testid="navbar-item">
                <Link
                  href={item.link}
                  languages={languages}
                  defaultLanguage={defaultLanguage}
                >
                  <Label
                    labelText={t(item.label)}
                    fontSize="sm"
                    color={color}
                    secondary={true}
                  />
                </Link>
              </ListItem>
            ))}
        </LinksList>
      </Nav>
      <ButtonWithLanguages>
        <LanguageMenu>
          <GlobeAltIcon width={21} />
          <Dropdown
            languages={languages}
            defaultLanguage={defaultLanguage}
            color={color}
          />
        </LanguageMenu>
        <Button
          {...actionProps}
          bgColor={hasBackground && transparent ? color : actionProps.bgColor}
          color={hasBackground && transparent ? bgColor : actionProps.color}
          handleClick={() => bookNow(bookingUrl)}
        />
      </ButtonWithLanguages>
      {!isOpen && (
        <Menu onClick={handleOpen} aria-label="hamburger menu">
          <Bars2Icon />
        </Menu>
      )}
      <Modal isOpen={isOpen} closeModal={hadnleClose}>
        <LinksList>
          {!isEmpty(links) &&
            links.map((item) => (
              <ListItem key={item.link}>
                <Link
                  href={item.link}
                  languages={languages}
                  defaultLanguage={defaultLanguage}
                >
                  <Label labelText={t(item.label)} fontSize="sm" />
                </Link>
              </ListItem>
            ))}
        </LinksList>
        <Dropdown languages={languages} defaultLanguage={defaultLanguage} />
      </Modal>
    </NavbarContainer>
  )
}

Navbar_v2.propTypes = {
  transparent: PropTypes.bool,
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

export default Navbar_v2

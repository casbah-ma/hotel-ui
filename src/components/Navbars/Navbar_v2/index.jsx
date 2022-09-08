import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
//components
import Link from '@/components/Link'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import Modal from '@/components/Modal'
//styles
import { ListItem, Nav, NavbarContainer, Menu } from './Navbar_v2.styles'
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

  return (
    <NavbarContainer
      bgColor={bgColor}
      color={color}
      isHidden={isHidden}
      hasBackground={hasBackground}
      transparent={transparent}
    >
      <Image
        src={logo}
        alt="logo"
        width={bp === 'lg' ? 224 : 138}
        height={bp === 'lg' ? 76 : 48}
        objectFit="contain"
      />
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
                  <Label labelText={t(item.label)} fontSize="sm" />
                </Link>
              </ListItem>
            ))}
        </LinksList>
      </Nav>
      <ButtonWithLanguages>
        <LanguageMenu>
          <GlobeAltIcon width={21} />
          <Dropdown languages={languages} defaultLanguage={defaultLanguage} />
        </LanguageMenu>
        <Button {...actionProps} handleClick={() => bookNow(bookingUrl)} />
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

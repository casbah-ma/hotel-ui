import Paragraph from '@/components/Paragraph'
import Label from '@/components/Label'
import Link from '@/components/LinkComponent'
import { useState } from 'react'
import {
  FooterContainer,
  FooterText,
  FooterLinks,
  FooterLink,
  FooterDivider,
  FooterDividerText,
  FooterLogo,
  FooterLinkDivider,
  AddressContainer,
  FooterLinkWrapper,
  ContactContainer,
} from './Footer.styles'
import { isEmpty } from '@/helpers/utils'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks'

function Footer({
  links,
  languages,
  description,
  defaultLanguage,
  color,
  bgColor,
  Address,
  hotelName,
  logo,
  contacts,
  t,
}) {
  const bp = useBreakpoint()
  const [year, setYear] = useState(new Date())

  const theme = useTheme()
  return (
    <FooterContainer
      data-testid="footer-container"
      color={color}
      bgColor={bgColor}
    >
      <FooterLogo>
        <Image
          src={logo}
          width={200}
          height={bp === 'md' || bp === 'lg' ? 200 : 100}
          objectFit="contain"
          alt="logo"
        />
      </FooterLogo>
      <FooterText>
        <Paragraph description={description} />
      </FooterText>
      <AddressContainer>
        <Label labelText={Address} color={theme.colors.text.secondary} />
        {(contacts?.phone || contacts?.email) && (
          <ContactContainer>
            <Paragraph description={`Tel: ${contacts?.phone}`} />
            <Paragraph description={`Email: ${contacts?.email}`} />
          </ContactContainer>
        )}
      </AddressContainer>
      <FooterLinks data-testid="links">
        {!isEmpty(links) &&
          links.map((item, index) => (
            <FooterLinkWrapper key={index}>
              <FooterLink>
                <Link
                  href={item.link}
                  languages={languages}
                  defaultLanguage={defaultLanguage}
                >
                  <Label
                    color={theme.colors.text.secondary}
                    fontSize="sm"
                    labelText={t(item.label)}
                  />
                </Link>
              </FooterLink>
              {index < links.length - 1 && <FooterLinkDivider />}
            </FooterLinkWrapper>
          ))}
      </FooterLinks>
      <FooterDivider />
      <FooterDividerText data-testid="copyright">
        <Label
          color={theme.colors.text.secondary}
          fontSize="sm"
          labelText={`${year.getFullYear()} © Copyrighted by ${hotelName}`}
        />
        {(bp !== 'xs' || bp !== 'sm') && (
          <Link
            href="/policies"
            languages={languages}
            defaultLanguage={defaultLanguage}
          >
            <Label
              color={theme.colors.text.secondary}
              fontSize="sm"
              labelText="Terms & Conditions"
            />
          </Link>
        )}
      </FooterDividerText>
    </FooterContainer>
  )
}

Footer.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default Footer

import Paragraph from '@/components/Paragraph'
import Input from '@/components/Inputs/Input'
import Label from '@/components/Label'
import Link from '@/components/Link'
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
  InputContainer,
  InputError,
} from './Footer.styles'
import { isEmpty, isEmail } from '@/helpers/utils'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks'

function Footer({
  links,
  languages,
  description,
  defaultLanguage,
  color = 'white',
  bgColor = 'black',
  hotelName,
  logo,
  t,
}) {
  const bp = useBreakpoint()
  const [year, setYear] = useState(new Date())
  const [inputValue, setInputValue] = useState({
    email: '',
    error: false,
    errorMessage: '',
  })

  // Handle input change
  const handleInputChange = (e) => {
    const { value } = e.target
    isEmail(value)
      ? setInputValue({ email: value, error: false })
      : setInputValue({
          email: value,
          error: true,
          errorMessage: 'Invalid email',
        })
  }

  // Handle input submit
  const handleSubmit = (e) => {
    e.preventDefault()
    !isEmpty(inputValue.email) && alert('Thank you for subscribing!')
  }

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
      <InputContainer>
        {/* <InputError>{inputValue.errorMessage}</InputError> */}
        <Input
          testID="footer-input"
          onChange={handleInputChange}
          placeHolder="Enter an email address"
          color="white"
          error={inputValue.error}
          withButton
          buttonProps={{
            buttonTestID: 'footer-button',
            buttonLabel: 'submit',
            onClick: handleSubmit,
          }}
        />
      </InputContainer>
      <FooterLinks data-testid="links">
        {!isEmpty(links) &&
          links.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
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
            </div>
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

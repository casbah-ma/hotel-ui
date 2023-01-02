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
  InputContainer,
  ShapesSection,
  FooterShapes,
  Signature,
} from './Footer.styles'
import { isEmail, isEmpty } from '@/helpers/utils'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks'
import Input from '@/components/Inputs/Input'

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
  buttonColor,
  buttonBgColor,
  rounded,
  shapes,
  newsletter = true,
}) {
  const bp = useBreakpoint()
  const [year, setYear] = useState(new Date())

  const theme = useTheme()

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
    !isEmpty(inputValue.email) && alert('Thank you!')
  }

  return (
    <ShapesSection color={color} bgColor={bgColor}>
      <FooterShapes>{shapes}</FooterShapes>
      <FooterContainer
        data-testid="footer-container"
        color={color}
        bgColor={bgColor}
      >
        <FooterLogo>
          <Link
            href="/"
            languages={languages}
            defaultLanguage={defaultLanguage}
          >
            <Image
              src={logo}
              width={200}
              height={bp === 'md' || bp === 'lg' ? 200 : 100}
              objectFit="contain"
              alt="logo"
            />
          </Link>
        </FooterLogo>
        {description && (
          <FooterText>
            <Paragraph description={t('description')} />
          </FooterText>
        )}
        {newsletter && (
          <InputContainer>
            {/* <InputError>{inputValue.errorMessage}</InputError> */}
            <Input
              testID="footer-input"
              onChange={handleInputChange}
              placeHolder={t('placeholder')}
              color="white"
              error={inputValue.error}
              withButton
              buttonProps={{
                buttonTestID: 'footer-button',
                buttonLabel: t('submit'),
                onClick: handleSubmit,
                buttonColor: buttonColor,
                buttonBgColor: buttonBgColor,
                rounded: rounded,
              }}
              placeHolderColor={true}
            />
          </InputContainer>
        )}
        <AddressContainer>
          {Address && (
            <Label labelText={Address} color={theme.colors.text.secondary} />
          )}
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
            labelText={`Copyrights © ${year.getFullYear()}`}
          />

          <a href="https://www.upoui.com" target="_blank">
            <Signature
              src="https://res.cloudinary.com/casbah/image/upload/v1672655541/UPoui_White_Favicon-cropped_syv3tt.svg"
              alt="signature"
            />
          </a>

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
    </ShapesSection>
  )
}

Footer.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  description: PropTypes.string,
  Address: PropTypes.string,
  placeholder: PropTypes.string,
  submit: PropTypes.string,
  contacts: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  shapes: PropTypes.element,
}

export default Footer

import Paragraph from '@/components/Paragraph'
import Label from '@/components/Label'
import Link from '@/components/LinkComponent'
import { useState } from 'react'
import {
  FooterContainer,
  FooterText,
  FooterDivider,
  FooterDividerText,
  FooterLogo,
  TopContent,
  BottomContent,
  FooterLinks,
  Rows,
  FooterLink,
  Input,
  Icon,
  Section,
  IconLabel,
  FooterShapes,
  ShapesSection,
} from './Footer.styles'
import { isEmpty, isEmail } from '@/helpers/utils'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import Button from '@/components/Button'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks'

function Footer({
  links,
  media,
  languages,
  defaultLanguage,
  color = 'white',
  bgColor = 'black',
  logo,
  t,
  linksLabel,
  emailLabel,
  placeholder,
  submit,
  description,
  shapes,
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
  const handleSubmit = () => {
    // e.preventDefault()
    !isEmpty(inputValue.email) && alert('Thank you')
  }

  const theme = useTheme()
  return (
    <ShapesSection color={color} bgColor={bgColor}>
      <FooterShapes>{shapes}</FooterShapes>
      <FooterContainer data-testid="footer-container">
        <TopContent>
          <div>
            <FooterLogo>
            <Link href="/" languages={languages} defaultLanguage={defaultLanguage}>
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={bp === 'md' || bp === 'lg' ? 200 : 100}
                objectFit="contain"
              />
            </Link>
            </FooterLogo>
            <FooterText>
              <Paragraph
                fontSize="sm"
                description={description ? description : t('footerDescription')}
              />
            </FooterText>
          </div>
          <Rows>
            <Section>
              <Label
                fontSize="sm"
                labelText={t('social')}
                textTransform="uppercase"
                weight="700"
              />
              <div>
                {!isEmpty(media) &&
                  media.map((item, index) => (
                    <FooterLink key={index}>
                      <a target="_blank" href={item.link}>
                        <IconLabel>
                          <Icon>
                            <item.icon
                              width="24px"
                              height="24px"
                              color={color}
                            />
                          </Icon>
                          <Label
                            color={color}
                            fontSize="sm"
                            labelText={t(item.label)}
                          />
                        </IconLabel>
                      </a>
                    </FooterLink>
                  ))}
              </div>
            </Section>
          </Rows>
          <Rows>
            <FooterLinks data-testid="links">
              <Label
                fontSize="sm"
                labelText={linksLabel ? linksLabel : t('navigation')}
                textTransform="uppercase"
                weight="700"
              />
              <div>
                {!isEmpty(links) &&
                  links.map((item, index) => (
                    <FooterLink key={index}>
                      <Link
                        href={item.link}
                        languages={languages}
                        defaultLanguage={defaultLanguage}
                      >
                        <Label
                          color={color}
                          fontSize="xs"
                          labelText={t(item.label)}
                        />
                      </Link>
                    </FooterLink>
                  ))}
              </div>
            </FooterLinks>
          </Rows>
          <Rows>
            <Label
              fontSize="sm"
              labelText={emailLabel ? emailLabel : t('footeremailLabel')}
              textTransform="uppercase"
              weight="700"
            />
            <Input
              value={inputValue.email}
              onChange={handleInputChange}
              placeholder={placeholder ? placeholder : t('footerplaceholder')}
              error={inputValue.error}
              bgColor={bgColor}
            />
            <Button
              color={bgColor}
              bgColor="white"
              label={submit ? submit : t('submit')}
              variant="secondary"
              handleClick={() => handleSubmit()}
            />
          </Rows>
        </TopContent>
        <BottomContent>
          <FooterDivider />
          <FooterDividerText data-testid="copyright">
            <Link
              href="/policies"
              defaultLanguage={defaultLanguage}
              languages={languages}
            >
              <Label
                fontSize="xs"
                labelText={t('terms')}
                textTransform="uppercase"
              />
            </Link>
            <Label
              fontSize="xs"
              labelText={`Copyrights © ${year.getFullYear()}`}
              textTransform="uppercase"
            />
          </FooterDividerText>
        </BottomContent>
      </FooterContainer>
    </ShapesSection>
  )
}

Footer.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  inTouch: PropTypes.string,
  description: PropTypes.string,
  contact: PropTypes.string,
  linksLabel: PropTypes.string,
  emailLabel: PropTypes.string,
  placeholder: PropTypes.string,
  submit: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  shapes: PropTypes.element,
}

export default Footer

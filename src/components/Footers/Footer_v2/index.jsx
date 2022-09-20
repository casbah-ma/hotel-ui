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
  Element,
  IconLabel,
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
  touch,
  languages,
  defaultLanguage,
  color = 'white',
  bgColor = 'black',
  logo,
  t,
  linksLabel="quck links",
  contact = "contact",
  inTouch = "get in touch",
  emailLabel = "hAVE A BLAST?",
  placeholder = "ENTER EMAIL",
  submit = "Submit",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor id placerat ornare sit dignissim senectus. Tortor ut eget est risus nisi venenatis."
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
    <FooterContainer
      data-testid="footer-container"
      color={color}
      bgColor={bgColor}
    >
      <TopContent>
        <div>
          <FooterLogo>
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={bp === 'md' || bp === 'lg' ? 200 : 100}
              objectFit="contain"
            />
          </FooterLogo>
          <FooterText>
            <Paragraph
              fontSize="sm"
              description={description}
            />
          </FooterText>
        </div>
        <Rows>
          <Section>
            <Label
              fontSize="sm"
              labelText={inTouch}
              textTransform="uppercase"
              weight="700"
            />
            <Element>
            {!isEmpty(touch) &&
                touch.map((item, index) => (
                  <Label
                  key={index}
                  color={color}
                    fontSize="xs"
                    labelText={item.label}
                  />
                ))}
            </Element>
          </Section>
          <Section>
            <Label
              fontSize="sm"
              labelText={contact}
              textTransform="uppercase"
              weight="700"
            />
            <div>
              {!isEmpty(media) &&
                media.map((item, index) => (
                  <FooterLink key={index}>
                    <Link
                      href={item.link}
                      languages={languages}
                      defaultLanguage={defaultLanguage}
                    >
                      <IconLabel>
                        <Icon>
                          <item.icon width="24px" height="24px" color={color} />
                        </Icon>
                        <Label
                        color={color}
                          fontSize="sm"
                          labelText={t(item.label)}
                        />
                      </IconLabel>
                    </Link>
                  </FooterLink>
                ))}
            </div>
          </Section>
        </Rows>
        <Rows>
          <FooterLinks data-testid="links">
            <Label
              fontSize="sm"
              labelText={linksLabel}
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
            labelText={emailLabel}
            textTransform="uppercase"
            weight="700"
          />
          <Input
            onChange={handleInputChange}
            placeholder={placeholder}
            error={inputValue.error}
            bgColor={bgColor}
          />
          <Button
            color={bgColor}
            bgColor="white"
            label={submit}
            variant="secondary"
            handleClick={() => handleSubmit()}
          />
        </Rows>
      </TopContent>
      <BottomContent>
        <FooterDivider />
        <FooterDividerText data-testid="copyright">
          <Label
            // color={theme.colors.text.secondary}
            fontSize="xs"
            labelText="Terms of service"
            textTransform="uppercase"
          />
          <Label
            fontSize="xs"
            labelText={`Copyrights © ${year.getFullYear()}`}
            textTransform="uppercase"
          />
        </FooterDividerText>
      </BottomContent>
    </FooterContainer>
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
}

export default Footer

import Paragraph from '@/components/Paragraph'
import Label from '@/components/Label'
import Link from '@/components/Link'
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
import { CloudinaryContext, Image } from 'cloudinary-react'
import { useTheme } from 'styled-components'
import Button from '@/components/Button'

function Footer({
  links,
  media,
  languages,
  defaultLanguage,
  color = 'white',
  bgColor = 'black',
  hotelName,
  logo,
  t,
}) {
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
    <CloudinaryContext cloudName="casbah" className="full-width">
      <FooterContainer
        data-testid="footer-container"
        color={color}
        bgColor={bgColor}
      >
        <TopContent>
          <div>
            <FooterLogo>
              <Image publicId={logo}></Image>
            </FooterLogo>
            <FooterText>
              <Paragraph
                fontSize="sm"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor id placerat ornare sit dignissim senectus. Tortor ut eget est risus nisi venenatis."
              />
            </FooterText>
          </div>
          <Rows>
            <Section>
              <Label
                color={theme.colors.text.secondary}
                fontSize="sm"
                labelText="get in touch"
                textTransform="uppercase"
                weight="700"
              />
              <Element>
                <Label
                  color={theme.colors.text.secondary}
                  fontSize="xs"
                  labelText="MON-FRIDAY"
                />
                <Label
                  color={theme.colors.text.secondary}
                  fontSize="xs"
                  labelText="10AM-11PM"
                />
              </Element>
            </Section>
            <Section>
              <Label
                color={theme.colors.text.secondary}
                fontSize="sm"
                labelText="contact"
                textTransform="uppercase"
                weight="700"
              />
              <div>
                {!isEmpty(links) &&
                  media.map((item, index) => (
                    <FooterLink key={index}>
                      <Link
                        href={item.link}
                        languages={languages}
                        defaultLanguage={defaultLanguage}
                      >
                        <IconLabel>
                          <Icon>
                            <item.icon
                              width="24px"
                              height="24px"
                              color="white"
                            />
                          </Icon>
                          <Label
                            color={theme.colors.text.secondary}
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
                color={theme.colors.text.secondary}
                fontSize="sm"
                labelText="quck links"
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
                          color={theme.colors.text.secondary}
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
              color={theme.colors.text.secondary}
              fontSize="sm"
              labelText="hAVE A BLAST?"
              textTransform="uppercase"
              weight="700"
            />
            <Input
              onChange={handleInputChange}
              placeholder="ENTER EMAIL"
              error={inputValue.error}
              bgColor={bgColor}
            />
            <Button
              color="#000000"
              bgColor="#fff"
              label="Submit"
              variant="secondary"
              handleClick={() => handleSubmit()}
            />
          </Rows>
        </TopContent>
        <BottomContent>
          <FooterDivider />
          <FooterDividerText data-testid="copyright">
            <Label
              color={theme.colors.text.secondary}
              fontSize="xs"
              labelText="Terms of service"
              textTransform="uppercase"
            />
            <Label
              color={theme.colors.text.secondary}
              fontSize="xs"
              labelText={`Copyrights © ${year.getFullYear()}`}
              textTransform="uppercase"
            />
          </FooterDividerText>
        </BottomContent>
      </FooterContainer>
    </CloudinaryContext>
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
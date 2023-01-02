import Paragraph from '@/components/Paragraph'
import {
  ContactsTitle,
  ContactsV2Container,
  StyledCol,
  StyledPara,
  StyledText,
  StyledTitle,
} from './ContactsV2.styles'
import PropTypes from 'prop-types'

const ContactsV2 = function ({
  title,
  titleColor = 'black',
  email,
  emailLabel,
  phone,
  phoneLabel,
  fax,
  faxLabel,
  adresse,
  adresseLabel,
  color = 'black',
}) {
  return (
    <ContactsV2Container data-testid="container">
      <ContactsTitle>
        <StyledTitle titleColor={titleColor}>{title}</StyledTitle>
      </ContactsTitle>
      <StyledCol>
        <StyledPara>
          <StyledText>{emailLabel}</StyledText>
          <Paragraph color={color} description={email} />
        </StyledPara>
        <StyledPara>
          <StyledText>{adresseLabel}</StyledText>
          <Paragraph color={color} description={adresse} />
        </StyledPara>
      </StyledCol>
      <StyledCol>
        <StyledPara>
          <StyledText>{phoneLabel}</StyledText>
          <Paragraph color={color} description={phone} />
        </StyledPara>
        <StyledPara>
          <StyledText>{faxLabel}</StyledText>
          <Paragraph color={color} description={fax} />
        </StyledPara>
      </StyledCol>
    </ContactsV2Container>
  )
}

ContactsV2.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  emailLabel: PropTypes.string,
  phone: PropTypes.string,
  phoneLabel: PropTypes.string,
  fax: PropTypes.string,
  faxLabel: PropTypes.string,
  adresse: PropTypes.string,
  adresseLabel: PropTypes.string,
  color: PropTypes.string,
}

export default ContactsV2

import Paragraph from '@/components/Paragraph'
import {
  ContactsTitle,
  ContactsV2Container,
  StyledCol,
  StyledPara,
  StyledParagraph,
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
          <StyledParagraph color={color}>{email}</StyledParagraph>
        </StyledPara>
        <StyledPara>
          <StyledText>{adresseLabel}</StyledText>
          <StyledParagraph color={color}>{adresse}</StyledParagraph>
        </StyledPara>
      </StyledCol>
      <StyledCol>
        <StyledPara>
          <StyledText>{phoneLabel}</StyledText>
          <StyledParagraph color={color}>{phone}</StyledParagraph>
        </StyledPara>
        <StyledPara>
          <StyledText>{faxLabel}</StyledText>
          <StyledParagraph color={color}>{fax}</StyledParagraph>
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

import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import {
  ContactsContainer,
  ContactsTitle,
  ContactsVariant,
  StyledTitle,
  StyledPara,
  StyledText,
} from './Contacts.styles'
import PropTypes from 'prop-types'

const Contacts = function ({
  title,
  email,
  emailLabel,
  phone,
  phoneLabel,
  withBorder,
  variant = v1,
}) {
  return (
    <ContactsContainer data-testid="container" variant={variant}>
      <ContactsTitle withBorder={withBorder} variant={variant}>
        {variant == 'v1' && <Title title={title} />}
        {variant == 'v2' && <StyledTitle>{title}</StyledTitle>}
      </ContactsTitle>
      <StyledPara>
      {variant == 'v2' && <StyledText>{emailLabel}</StyledText> }
        <Paragraph description={email} />
      </StyledPara>
      <StyledPara>
      {variant == 'v2' && <StyledText>{phoneLabel}</StyledText> }
        <Paragraph description={phone} />
      </StyledPara>
    </ContactsContainer>
  )
}

Contacts.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  emailLabel: PropTypes.string,
  phone: PropTypes.string,
  phoneLabel: PropTypes.string,
  withBorder: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(ContactsVariant)),
}

export default Contacts

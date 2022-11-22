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
  color = 'black',
  titleColor = 'black',
  variant = 'v1',
}) {
  return (
    <ContactsContainer data-testid="container" variant={variant}>
      <ContactsTitle withBorder={withBorder} variant={variant}>
        {variant == 'v1' && <Title title={title} color={titleColor}/>}
        {variant == 'v2' && (
          <StyledTitle titleColor={titleColor}>{title}</StyledTitle>
        )}
      </ContactsTitle>
      <StyledPara>
        {variant == 'v2' && <StyledText>{emailLabel}</StyledText>}
        <Paragraph color={color} description={email} />
      </StyledPara>
      <StyledPara>
        {variant == 'v2' && <StyledText>{phoneLabel}</StyledText>}
        <Paragraph color={color} description={phone} />
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
  color: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(ContactsVariant)),
}

export default Contacts

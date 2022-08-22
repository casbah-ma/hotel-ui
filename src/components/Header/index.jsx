import PropTypes from 'prop-types'
//components
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
//styles
import {
  ContactItem,
  DescriptionWrapper,
  StyledHeader,
  TitleWrapper,
} from './Header.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import Label from '../Label'

function Header({ title, description, contact }) {
  const isContact = !isEmpty(contact)
  return (
    <StyledHeader isContact={isContact}>
      <TitleWrapper>
        <Title level="3" title={title} />
      </TitleWrapper>
      <DescriptionWrapper>
        {!isContact && <Paragraph description={description} />}
        {isContact && (
          <>
            <ContactItem>
              <Paragraph description="Email:" fontSize="rg" />
              <Label labelText={contact.email} fontSize="sm" />
            </ContactItem>
            <ContactItem>
              <Paragraph description="Phone Number:" fontSize="rg" />
              <Label labelText={contact.number} fontSize="sm" />
            </ContactItem>
          </>
        )}
      </DescriptionWrapper>
    </StyledHeader>
  )
}

Header.defaultProps = {
  contact: null,
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contact: PropTypes.shape({
    email: PropTypes.string,
    number: PropTypes.string,
  }),
}

export default Header

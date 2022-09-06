import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import { ContactsContainer, ContactsTitle } from './Contacts.styles'

const Contacts = function ({ email, phone, withBorder }) {
  return (
    <ContactsContainer data-testid="container">
      <ContactsTitle withBorder={withBorder}>
        <Title title="Contacts" />
      </ContactsTitle>
      <Paragraph description={email} />
      <Paragraph description={phone} />
    </ContactsContainer>
  )
}
export default Contacts

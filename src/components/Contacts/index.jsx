import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import { ContactsContainer } from './Contacts.styles'

const Contacts = function ({ email, phone }) {
  return (
    <ContactsContainer data-testid="container">
      <Title title="Contacts" />
      <Paragraph description={email} />
      <Paragraph description={phone} />
    </ContactsContainer>
  )
}
export default Contacts

import Contacts from '.'
import { ContactsVariant } from './Contacts.styles'

export default {
  title: 'Components/Contacts',
  component: Contacts,
  argTypes: {
    variant: {
      options: Object.keys(ContactsVariant),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Contacts {...args} />
export const Primary = Template.bind({})
Primary.args = {
  variant: 'v1',
  withBorder: true,
  title: 'Contacts',
  email: 'reservations@palazzoversace.com',
  phone: '+61 7 5509 8000',
}
export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'v2',
  withBorder: false,
  title: 'Contact us',
  email: 'reservations@palazzoversace.com',
  emailLabel:'E-mail:',
  phone: '+61 7 5509 8000',
  phoneLabel: 'Phone Number:'
}

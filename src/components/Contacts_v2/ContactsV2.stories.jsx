import ContactsV2 from '.'

export default {
  title: 'Components/Contacts_v2',
  component: ContactsV2,
  argTypes: {
    variant: {},
  },
}

const Template = (args) => <ContactsV2 {...args} />
export const Primary = Template.bind({})
Primary.args = {
  variant: 'v2',
  withBorder: false,
  title: 'Contact us',
  email: 'reservations@palazzo',
  emailLabel: 'E-mail:',
  phone: '+61 7 5509 8000',
  phoneLabel: 'Phone Number:',
  fax: '+61 7 550',
  faxLabel: 'fax:',
  adresse: 'reservations@palazzoversace.com',
  adresseLabel: 'adresse:',
}

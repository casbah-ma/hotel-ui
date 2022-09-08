import Contacts from '.'

export default {
  title: 'Components/Contacts',
  component: Contacts,
}

const Template = (args) => <Contacts {...args} />
export const Default = Template.bind({})
Default.args = {
  withBorder: true,
  email: 'reservations@palazzoversace.com',
  phone: '+61 7 5509 8000',
}

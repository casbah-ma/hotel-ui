import Header from '.'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Normal = Template.bind({})
Normal.args = {
  title: 'Sleep Peacefully',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
}

export const LargeTitle = Template.bind({})
LargeTitle.args = {
  title: 'Ready to explore Tangier?',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
}

export const Contact = Template.bind({})
Contact.args = {
  title: 'Contact',
  contact: {
    email: 'restaurantreservations@palazzoversace.com.au',
    number: '+61 7 5509 8000',
  },
}

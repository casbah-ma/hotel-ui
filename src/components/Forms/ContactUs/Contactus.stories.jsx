import Contactus from '.'

export default {
  title: 'Forms/ContactUs',
  component: Contactus,
}

const Template = (args) => <Contactus {...args} />
export const Default = Template.bind({})
Default.args = {
  formInputs: {
    fullName: 'Test test',
    fullNameError: '',
    email: 'test@test.com',
    emailError: '',
    message: 'Test message',
    messageError: '',
  },
  onChange: () => {},
  onClick: () => {},
}

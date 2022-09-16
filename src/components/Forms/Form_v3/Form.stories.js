import Form_v3 from '.'

export default {
  title: 'Forms/Form_v3',
  component: Form_v3,
}

const Template = (args) => <Form_v3 {...args} />
export const Default = Template.bind({})
Default.args = {
  formInputs: {
    fullName: 'Test test',
    fullNameError: '',
    email: 'test@test.com',
    emailError: '',
    message: 'Test message',
    messageError: '',
    buttonLabel:'Submit your message',
    whithline: false,
    color: '#000000',
  },
  onChange: () => {},
  onClick: () => {},
}

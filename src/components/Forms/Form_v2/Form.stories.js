import Form_v2 from '.'

export default {
  title: 'Forms/Form_v2',
  component: Form_v2,
}

const Template = (args) => <Form_v2 {...args} />
export const Default = Template.bind({})
Default.args = {
  formInputs: {
    fullName: 'Test test',
    fullNameError: '',
    email: 'test@test.com',
    emailError: '',
    message: 'Test message',
    messageError: '',
    buttonLabel:'Submit',
  },
  onChange: () => {},
  onClick: () => {},
}

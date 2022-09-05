import Form_v3 from '.'

export default {
  title: 'Forms/Form_v3',
  component: Form_v3,
}

const Template = (args) => <Form_v3 {...args} />
export const Default = Template.bind({})
Default.args = {
  formInputs: {
    fullName: '',
    fullNameError: '',
    email: '',
    emailError: '',
    message: '',
    messageError: '',
    buttonLabel:'Submit your message',
  },
  onChange: () => {},
  onClick: () => {},
}

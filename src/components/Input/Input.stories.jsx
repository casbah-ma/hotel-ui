import Input from '.'
import Centre from '@/components/Centre'

export default {
  title: 'Common/input',
  component: Input,
  decorators: [(story) => <Centre>{story()}</Centre>],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['input', 'textarea'],
      },
    },
  },
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
export const TextArea = Template.bind({})
export const WithError = Template.bind({})
export const WithButton = Template.bind({})

Default.args = {
  value: '',
  placeHolder: `Full Name`,
  error: false,
  color: 'black',
  onChange: () => {},
}

TextArea.args = {
  ...Default.args,
  type: 'textarea',
  placeHolder: 'message',
}

WithError.args = {
  ...Default.args,
  error: true,
}

WithButton.args = {
  ...Default.args,
  withButton: true,
  buttonProps: {
    buttonLabel: 'Submit',
    buttonColor: 'primary',
    buttonBgColor: 'primary',
    onClick: () => {},
  },
}

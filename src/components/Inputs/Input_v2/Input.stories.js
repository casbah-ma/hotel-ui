import Centre from '@/components/Centre'
import Input_v2 from '.'

export default {
  title: 'Common/input_v2',
  component: Input_v2,
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

const Template = (args) => <Input_v2 {...args} />

export const Default = Template.bind({})
export const Email = Template.bind({})
export const TextArea = Template.bind({})
export const WithError = Template.bind({})

Default.args = {
  value: '',
  placeHolder: `Full Name`,
  error: false,
  color: '#CBCBCB',
  onChange: () => {},
}

Email.args = {
  ...Default.args,
  placeHolder: 'email',
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


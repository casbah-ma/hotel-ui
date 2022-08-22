import { labelFontSizes } from '@/styles/theming'
import Label from '.'

export default {
  title: 'Typography/Label',
  component: Label,
  argTypes: {
    fontSize: {
      options: Object.keys(labelFontSizes),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Label {...args} />

export const Small = Template.bind({})
Small.args = {
  labelText:
    'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  fontSize: 'sm',
}

export const Meduim = Template.bind({})
Meduim.args = {
  ...Small.args,
  fontSize: 'md',
}

import Button from '.'
//decorator
import Centre from '@/components/Centre'
//icons
import { PlayIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
//theming
import { buttonsVariant } from './Button.styles'

export default {
  title: 'Common/Button',
  component: Button,
  decorators: [(story) => <Centre>{story()}</Centre>],
  argTypes: {
    variant: {
      options: Object.keys(buttonsVariant),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  border: false,
  variant: 'primary',
  label: 'Check Availability',
  disabled: false,
  t: (string) => string,
  handleClick: () => console.log('you clicked me'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
  color: 'white',
  bgColor: 'black',
}

export const Dark = Template.bind({})
Dark.args = {
  ...Primary.args,
  color: 'white',
  bgColor: 'black',
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Primary.args,
  variant: 'rounded',
  label: '',
  Icon: PlusIcon,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  ...Primary.args,
  variant: 'horizontal',
  label: 'Play',
  Icon: PlayIcon,
}

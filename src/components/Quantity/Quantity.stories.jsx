import Quantity from '.'
import * as Button from '@/components/Button/Button.stories'
import Centre from '@/components/Centre'
import useState from 'storybook-addon-state'

export default {
  title: 'Components/Quantity',
  component: Quantity,
  decorators: [(story) => <Centre>{story()}</Centre>],
}

const Template = (args) => <Quantity {...args} />
export const Default = Template.bind({})
Default.args = {
  buttonProps: Button.default.args,
  title: 'Adults',
  value: 1,
}

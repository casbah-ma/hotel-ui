import Guests from '.'
import * as Button from '@/components/Button/Button.stories'
import useState from 'storybook-addon-state'

export default {
  title: 'Components/Guests',
  component: Guests,
}

const Template = (args) => <Guests {...args} />
export const GuestsCard = Template.bind({})
GuestsCard.args = {
  title: 'Guests',
  guestValues: {
    adults: 1,
    kids: 0,
  },
  guestsTitles: {
    adults: 'Adults',
    kids: 'Kids',
  },
  buttonProps: { ...Button.Primary.args, color: 'primary', bgColor: 'primary' },
}

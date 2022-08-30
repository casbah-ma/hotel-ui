import Guests from '.'
import * as Button from '@/components/Button/Button.stories'
import useState from 'storybook-addon-state'
import theme from '@/src/theme'

export default {
  title: 'Components/Guests',
  component: Guests,
  decorators: [
    (story) => {
      const [guestValues, setGuestValues] = useState('clicks', {
        adults: 1,
        kids: 0,
      })

      const handleGuestChange = (type, value) => {
        setGuestValues({ ...guestValues, [type]: value })
      }
      return (
        <Guests
          guestValues={guestValues}
          onGuestChange={handleGuestChange}
          buttonProps={{
            ...Button.Primary.args,
            color: theme.colors.DatesCore.text,
            bgColor: 'primary',
          }}
        />
      )
    },
  ],
}

const Template = (args) => <Guests {...args} />
export const GuestsCard = Template.bind({})
GuestsCard.args = {
  title: 'Guests',
  guestValues: {
    adults: 1,
    kids: 0,
  },
  buttonProps: {
    ...Button.Primary.args,
    color: theme.colors.DatesCore.text,
    bgColor: 'primary',
  },
}

import BookingBar from '.'
import * as Button from '@/components/Button/Button.stories'
import useState from 'storybook-addon-state'

const props = {
  dates: { startDate: new Date(), endDate: new Date() },
  guestValues: { adults: 1, kids: 0 },
  buttonProps: { ...Button.Primary.args },
  onDatesChange: () => {},
  onGuestChange: () => {},
  baseUrl: 'https://Hotel UI-garden-tanger-malabata.hotelrunner.com/',
}

export default {
  title: 'Components/Bookings/BookingBar',
  component: BookingBar,
  decorators: [
    (story) => {
      const [dates, setDates] = useState('changes', {
        startDate: null,
        endDate: null,
      })
      const [guestValues, setGuestValues] = useState('guests', {
        adults: 1,
        kids: 0,
      })

      // handle The Guests number
      const onGuestChange = (type, value) => {
        setGuestValues({ ...guestValues, [type]: value })
      }

      // handle Dates Changes
      const onDatesChange = (dates) => {
        console.log('dates', dates)
        setDates(dates)
      }
      return (
        <div className="h-screen pb-24 flex justify-center items-end">
          <BookingBar
            buttonProps={{
              ...Button.Primary.args,
            }}
            dates={dates}
            guestValues={guestValues}
            onGuestChange={onGuestChange}
            onDatesChange={onDatesChange}
          />
        </div>
      )
    },
  ],
}

const Template = (args) => <BookingBar {...args} />

export const Default = Template.bind({})
Default.args = {
  ...props,
}

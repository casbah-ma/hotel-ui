import BookingBar from '.'
import * as Button from '@/components/Button/Button.stories'
import useState from 'storybook-addon-state'
import * as DropdownStories from '@/components/Dropdown/Dropdown.stories'

const props = {
  title_1: 'Check-in - Check-out',
  title_2: 'Guests',
  dates: { startDate: new Date(), endDate: new Date() },
  guestValues: { adults: 1, kids: 0 },
  guestsTitles: { adults: 'Adults', kids: 'Kids', color: '' },
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
        adults: 0,
        kids: 0,
      })

      // handle The Guests number
      const onGuestChange = (type, value) => {
        setGuestValues({ ...guestValues, [type]: value })
      }

      // handle Dates Changes
      const onDatesChange = (dates) => {
        setDates(dates)
      }
      return (
        <div className="h-screen pb-24 flex justify-center items-end">
          <BookingBar
            title_1="Check in - Check out"
            title_2="Guests"
            buttonProps={{
              ...Button.Primary.args,
            }}
            dates={dates}
            guestsTitles={{ adults: 'Adults', kids: 'Kids', color: '' }}
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

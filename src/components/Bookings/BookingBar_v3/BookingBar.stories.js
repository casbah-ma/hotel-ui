import useState from 'storybook-addon-state'
import BookingBar_v3 from '.'

export default {
  title: 'Components/Bookings/BookingBar_v3',
  component: BookingBar_v3,
  decorators: [
    (story) => {
      const [dates, setDates] = useState('changes', {
        startDate: '',
        endDate: '',
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
      const onDatesChanges = (name, value) => {
        setDates({ ...dates, [name]: value })
      }
      return (
        <BookingBar_v3
          bookingTitles={{
            culmn_1: 'Check in',
            culmn_2: 'Check out',
            culmn_3: 'Adults',
            culmn_4: 'Kids',
          }}
          buttonProps={{
            text: 'Check Availability',
            onClick: () => {
              console.log('dates', dates)
              console.log('guestValues', guestValues)
            },
          }}
          dates={dates}
          guestValues={guestValues}
          onGuestChange={onGuestChange}
          onDatesChanges={onDatesChanges}
        />
      )
    },
  ],
}

const Template = (args) => <BookingBar_v3 {...args} />
export const Default = Template.bind({})
Default.args = {
  dates: {
    startDate: null,
    endDate: null,
  },
  bookingTitles: {
    culmn_1: 'Check in',
    culmn_2: 'Check out',
    culmn_3: 'Adults',
    culmn_4: 'Kids',
  },
  guestValues: {
    adults: 1,
    kids: 0,
  },
  buttonProps: {
    text: 'Check Availabilty',
  },
}

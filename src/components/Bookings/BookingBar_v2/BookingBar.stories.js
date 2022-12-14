import BookingBa_v2 from '.'
import useState from 'storybook-addon-state'

export default {
  title: 'Components/Bookings/BookingBar_v2',
  component: BookingBa_v2,
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
          <BookingBa_v2
            title_1="Check in  -  Check out"
            title_2="Guests"
            buttonProps={{
              text: 'Vérifier la disponibilité',
              onClick: () => {
                // console.log('dates', dates)
                // console.log('guestValues', guestValues)
              },
            }}
            dates={dates}
            guestValues={guestValues}
            onGuestChange={onGuestChange}
            onDatesChange={onDatesChange}
            guestsTitles={{ adults: 'Adults', kids: 'Kids' }}
          />
        </div>
      )
    },
  ],
}

const Template = (args) => <BookingBa_v2 {...args} />
export const Default = Template.bind({})
Default.args = {}

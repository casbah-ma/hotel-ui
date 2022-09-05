import BookingBa_v2 from '.'
import useState from 'storybook-addon-state'

const props = {
  dates: { startDate: new Date(), endDate: new Date() },
  guestValues: { adults: 1, kids: 0 },
  onDatesChange: () => {},
  onGuestChange: () => {},
  baseUrl: 'https://Hotel UI-garden-tanger-malabata.hotelrunner.com/',
}

export default {
  title: 'Components/Bookings/BookingBar_v2',
  component: BookingBa_v2,
}

const Template = (args) => <BookingBa_v2 {...args} />
export const Default = Template.bind({})
Default.args = {
  dates: {
    startDate: '',
    endDate: '',
  },
  bookingTitle: {
    title_1: 'Check in  -  Check out',
    title_2: 'Guests',
  },
  buttonProps: {
    text: 'Check Availability',
    onClick: () => console.log('Book Now'),
  },
}

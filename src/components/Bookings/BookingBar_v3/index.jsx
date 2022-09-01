import PropTypes from 'prop-types'
import {
  BookingBarContainer,
  BookingButton,
  BookingContent,
  BookingCulmns,
} from './BookingBar.styles'

function BookingBar_v3(props) {
  return (
    <BookingBarContainer>
      <BookingContent>
        <BookingCulmns>Book Now</BookingCulmns>
        <BookingCulmns>Book Now</BookingCulmns>
        <BookingCulmns>Book Now</BookingCulmns>
        <BookingCulmns>Book Now</BookingCulmns>
      </BookingContent>
      <BookingButton>Check Availability </BookingButton>
    </BookingBarContainer>
  )
}

BookingBar_v3.propTypes = {
  dates: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
  onDatesChange: PropTypes.func,
  guestValues: PropTypes.shape({
    adults: PropTypes.number,
    kids: PropTypes.number,
  }),
  onGuestChange: PropTypes.func,
  bookingTitle: PropTypes.shape({
    title_1: PropTypes.string,
    title_2: PropTypes.string,
  }),
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  baseUrl: PropTypes.string,
}

export default BookingBar_v3

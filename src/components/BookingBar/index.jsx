import { useBreakpoint } from '@/hooks'
import { getBreakpoint } from './Bars'
import PropTypes from 'prop-types'

const BookingBar = function (props) {
  const bp = useBreakpoint()
  return getBreakpoint(bp, props)
}

BookingBar.propTypes = {
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
  buttonProps: PropTypes.shape({}),
  baseUrl: PropTypes.string,
}

export default BookingBar

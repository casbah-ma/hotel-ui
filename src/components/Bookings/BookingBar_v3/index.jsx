import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../../Button'
import GuestCard from '../../Cards/GuestCard'
import Label from '../../Label'
import Title from '../../Title'
import {
  BookingBarContainer,
  BookingButton,
  BookingContent,
  BookingCulmns,
  BookingDate,
  BookingGuests,
  GuestsButton,
} from './BookingBar.styles'

function BookingBar_v3({}) {
  const [guestValues, setGuestValues] = useState({
    adults: 1,
    kids: 0,
  })

  // handle Adults Changes
  const handlePlusClick = (type) => {
    console.log('salam')
    setGuestValues({ ...guestValues, [type]: guestValues[type] + 1 })
  }
  const handleMinusClick = (type) => {
    setGuestValues({ ...guestValues, [type]: guestValues[type] - 1 })
  }

  return (
    <BookingBarContainer>
      <BookingContent>
        <BookingCulmns>
          <Label labelText="Check in" />
          <BookingDate type="date" />
        </BookingCulmns>
        <BookingCulmns>
          <Label labelText="Check out" />
          <BookingDate type="date" />
        </BookingCulmns>
        <BookingCulmns>
          <GuestCard
            title="Adults"
            value={guestValues.adults}
            onMinusClick={() => {
              handleMinusClick('adults')
            }}
            onPlusClick={() => {
              handlePlusClick('adults')
            }}
          />
        </BookingCulmns>
        <BookingCulmns>
          <GuestCard
            title="Kids"
            value={guestValues.kids}
            onMinusClick={() => {
              handleMinusClick('kids')
            }}
            onPlusClick={() => {
              handlePlusClick('kids')
            }}
          />
        </BookingCulmns>
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

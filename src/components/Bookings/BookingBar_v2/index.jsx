import { Popover } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import Button from '../../Button'
import Guests from '../../Cards/GuestsCard'
import DatePicker from '../../DatePicker'
import Label from '../../Label'
import {
  BookingButton,
  BookingContent,
  BookngContainer,
  BookingContentLeft,
  BookingContentRight,
} from './BookingBar.styles'

function BookingBa_v2({
  dates,
  guestValues,
  onGuestChange,
  bookingTitle,
  buttonProps,
  onDatesChange,
  baseUrl,
}) {
  const guestbtn = useRef(null) // ref for guests button
  const { text, onClick } = buttonProps
  const [isOpen, setIsOpen] = useState({
    dates: false,
    guests: false,
  })

  const onDatesChanges = async (dates) => {
    await onDatesChange(dates)
    if (dates?.startDate && dates?.endDate) {
      setIsOpen({ ...isOpen, dates: false, guests: true })
      guestbtn.current.click()
    }
  }

  // Handle availability of guests
  const checkAvailability = (dates, guestValues, baseUrl) => {
    const filters = {
      checkin_date: dates?.startDate,
      checkout_date: dates?.endDate,
      adult_count: guestValues?.adults,
      child_count: guestValues?.kids,
    }
    window.open(bookingUrl(filters, baseUrl), '_blank')
  }

  return (
    <Popover.Group style={{ position: 'relative' }}>
      <BookngContainer data-testid="booking-bar">
        <BookingContent>
          <BookingContentLeft>
            <Label
              role="label"
              labelText={bookingTitle.title_1}
              fontSize="sm"
              color="black"
            />
            <Popover>
              <Popover.Button>
                <Button
                  as="div"
                  variant="rounded"
                  bgColor="white"
                  Icon={ChevronUpIcon}
                  color="black"
                />
              </Popover.Button>
              <Popover.Panel className="datesPanel">
                <DatePicker dates={dates} onDatesChange={onDatesChanges} />
              </Popover.Panel>
            </Popover>
          </BookingContentLeft>
          <BookingContentRight>
            <Label
              role="label"
              labelText={bookingTitle.title_2}
              fontSize="sm"
              color="black"
            />
            <Popover>
              <Popover.Button ref={guestbtn}>
                <Button
                  as="div"
                  variant="rounded"
                  bgColor="white"
                  color="black"
                  Icon={ChevronUpIcon}
                />
              </Popover.Button>
              <Popover.Panel className="datesPanel">
                <Guests
                  centred
                  title="Guests :"
                  guestValues={guestValues}
                  buttonProps={buttonProps}
                  onGuestChange={onGuestChange}
                />
              </Popover.Panel>
            </Popover>
          </BookingContentRight>
        </BookingContent>
        <BookingButton
          onClick={() => checkAvailability(dates, guestValues, baseUrl)}
        >
          {text}
        </BookingButton>
      </BookngContainer>
    </Popover.Group>
  )
}

BookingBa_v2.propTypes = {}

export default BookingBa_v2

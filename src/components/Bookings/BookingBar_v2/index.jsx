import { useBreakpoint } from '@/hooks'
import { Popover } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import Button from '@/components/Button'
import Guests from '@/components/Cards/GuestsCard'
import DatePicker from '@/components/DatePicker'
import Label from '@/components/Label'
import theme from '@/components/../../theme'
import {
  BookingWrapper,
  BookingButton,
  BookingContent,
  BookngContainer,
  BookingContentLeft,
  BookingContentRight,
  BookingMobileButton,
} from './BookingBar.styles'

function BookingBa_v2({
  dates,
  guestValues,
  onGuestChange,
  title_1,
  title_2,
  buttonProps,
  onDatesChange,
  baseUrl,
}) {
  const guestbtn = useRef(null) // ref for guests button
  const { text, onClick } = buttonProps // button props
  const bp = useBreakpoint() // breakpoint
  const [isOpen, setIsOpen] = useState({
    dates: false,
    guests: false,
  })

  // handle changes of datepicker
  const onDatesRangeChanges = async (dates) => {
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
    onClick ? onClick() : window.open(bookingUrl(filters, baseUrl), '_blank')
  }

  return (
    <Popover.Group>
      <BookingWrapper>
        <BookngContainer data-testid="booking-bar">
          <BookingContent>
            <BookingContentLeft>
              <Label role="label" labelText={title_1 || ''} fontSize={bp} />
              <Popover>
                <Popover.Button>
                  <Button
                    as="div"
                    variant="rounded"
                    bgColor={theme.colors.DatesCore.text}
                    Icon={ChevronUpIcon}
                    color={theme.colors.DatesCore.bg}
                  />
                </Popover.Button>
                <Popover.Panel className="datesPanel">
                  <DatePicker
                    dates={dates}
                    onDatesChange={onDatesRangeChanges}
                  />
                </Popover.Panel>
              </Popover>
            </BookingContentLeft>
            <BookingContentRight>
              <Label role="label" labelText={title_2 || ''} fontSize={bp} />
              <Popover>
                <Popover.Button ref={guestbtn}>
                  <Button
                    as="div"
                    variant="rounded"
                    bgColor="white"
                    color={theme.colors.DatesCore.bg}
                    Icon={ChevronUpIcon}
                  />
                </Popover.Button>
                <Popover.Panel className="datesPanel">
                  <Guests
                    centred
                    title={title_2}
                    guestValues={guestValues}
                    buttonProps={buttonProps}
                    onGuestChange={onGuestChange}
                  />
                </Popover.Panel>
              </Popover>
            </BookingContentRight>
          </BookingContent>
          {bp !== 'xs' && bp !== 'sm' && (
            <BookingButton
              onClick={() => checkAvailability(dates, guestValues, baseUrl)}
            >
              {text}
            </BookingButton>
          )}
        </BookngContainer>
        {(bp === 'xs' || bp === 'sm') && (
          <BookingMobileButton
            onClick={() => checkAvailability(dates, guestValues, baseUrl)}
          >
            {' '}
            {text}
          </BookingMobileButton>
        )}
      </BookingWrapper>
    </Popover.Group>
  )
}

BookingBa_v2.propTypes = {
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
  title_1: PropTypes.string,
  title_2: PropTypes.string,
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  baseUrl: PropTypes.string,
}

export default BookingBa_v2

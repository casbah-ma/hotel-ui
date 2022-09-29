import { useBreakpoint } from '@/hooks'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import GuestCard from '@/components/Cards/GuestCard'
import Label from '@/components/Label'
import {
  BookingBarContainer,
  BookingButton,
  BookingContent,
  Bookingcolumns,
  BookingDate,
  ShowContentButton,
} from './BookingBar.styles'

function BookingBar_v3({
  color,
  bgColor,
  dates,
  guestValues,
  onGuestChange,
  bookingTitles,
  onDatesChange,
  buttonProps,
  baseUrl,
}) {
  const bp = useBreakpoint()
  const [showContent, setShowContent] = useState(false)

  // get breakPoint for mobile version (p.s: i will change it to useMemo for performonce)
  useEffect(() => {
    bp === 'xs' || bp === 'sm' ? setShowContent(true) : setShowContent(false)
  }, [bp])

  // handle Adults Changes
  const handlePlusClick = (type) => {
    onGuestChange(type, guestValues[type] + 1)
  }
  // handle Kids Changes
  const handleMinusClick = (type) => {
    onGuestChange(type, guestValues[type] - 1)
  }

  // handle Dates Changes
  const handleDatesChanges = (e) => {
    e.preventDefault()
    const { name, value } = e?.target
    onDatesChange(name, value)
  }

  // Handle availability of guests
  const checkAvailability = (dates, guestValues, baseUrl) => {
    const filters = {
      checkin_date: dates?.startDate,
      checkout_date: dates?.endDate,
      adult_count: guestValues?.adults,
      child_count: guestValues?.kids,
    }
    buttonProps.onClick
      ? buttonProps.onClick()
      : window.open(bookingUrl(filters, baseUrl), '_blank')
  }
  return (
    <BookingBarContainer showContent={showContent}>
      {!showContent ? (
        <Desktop
          color={color}
          bgColor={bgColor}
          handleDatesChanges={handleDatesChanges}
          dates={dates}
          bookingTitles={bookingTitles}
          guestValues={guestValues}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
      ) : (
        <Mobile
          color={color}
          bgColor={bgColor}
          handleDatesChanges={handleDatesChanges}
          dates={dates}
          bookingTitles={bookingTitles}
          guestValues={guestValues}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
      )}
      {showContent ? (
        <ShowContentButton onClick={() => setShowContent(!showContent)}>
          <ChevronDownIcon width={16} height={16} />
        </ShowContentButton>
      ) : (
        <BookingButton
          onClick={() => checkAvailability(dates, guestValues, baseUrl)}
        >
          {buttonProps?.text}
        </BookingButton>
      )}
    </BookingBarContainer>
  )
}

BookingBar_v3.propTypes = {
  dates: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  guestValues: PropTypes.shape({
    adults: PropTypes.number,
    kids: PropTypes.number,
  }),
  onGuestChange: PropTypes.func,
  bookingTitle: PropTypes.shape({
    column_1: PropTypes.string,
    column_2: PropTypes.string,
    column_3: PropTypes.string,
    column_4: PropTypes.string,
  }),
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  baseUrl: PropTypes.string,
}

export default BookingBar_v3

function Desktop({
  color,
  bgColor,
  guestValues,
  handlePlusClick,
  handleMinusClick,
  bookingTitles,
  dates,
  handleDatesChanges,
}) {
  return (
    <BookingContent>
      <Bookingcolumns>
        <Label labelText={bookingTitles.column_1} />
        <BookingDate
          type="date"
          value={dates?.startDate}
          name="startDate"
          onChange={handleDatesChanges}
        />
      </Bookingcolumns>
      <Bookingcolumns>
        <Label labelText={bookingTitles.column_2} />
        <BookingDate
          type="date"
          value={dates.endDate}
          name="endDate"
          onChange={handleDatesChanges}
        />
      </Bookingcolumns>
      <Bookingcolumns>
        <GuestCard
          color={color}
          bgColor={bgColor}
          title={bookingTitles.column_3}
          value={guestValues.adults}
          onMinusClick={() => {
            handleMinusClick('adults')
          }}
          onPlusClick={() => {
            handlePlusClick('adults')
          }}
        />
      </Bookingcolumns>
      <Bookingcolumns>
        <GuestCard
          color={color}
          bgColor={bgColor}
          title={bookingTitles.column_4}
          value={guestValues.kids}
          onMinusClick={() => {
            handleMinusClick('kids')
          }}
          onPlusClick={() => {
            handlePlusClick('kids')
          }}
        />
      </Bookingcolumns>
    </BookingContent>
  )
}

function Mobile({
  color,
  bgColor,
  showContent,
  guestValues,
  handlePlusClick,
  handleMinusClick,
  bookingTitles,
  dates,
  handleDatesChanges,
}) {
  return (
    <BookingContent>
      <Bookingcolumns>
        <Label labelText={bookingTitles.column_1} />
        <BookingDate
          type="date"
          value={dates.startDate}
          name="startDate"
          onChange={handleDatesChanges}
        />
      </Bookingcolumns>
      {showContent && (
        <>
          <Bookingcolumns>
            <Label labelText={bookingTitles.column_2} />
            <BookingDate
              type="date"
              value={dates.endDate}
              name="endDate"
              onChange={handleDatesChanges}
            />
          </Bookingcolumns>
          <Bookingcolumns>
            <GuestCard
              color={color}
              bgColor={bgColor}
              title={bookingTitles.column_3}
              value={guestValues.adults}
              onMinusClick={() => {
                handleMinusClick('adults')
              }}
              onPlusClick={() => {
                handlePlusClick('adults')
              }}
            />
          </Bookingcolumns>
          <Bookingcolumns>
            <GuestCard
              color={color}
              bgColor={bgColor}
              title={bookingTitles.column_4}
              value={guestValues.kids}
              onMinusClick={() => {
                handleMinusClick('kids')
              }}
              onPlusClick={() => {
                handlePlusClick('kids')
              }}
            />
          </Bookingcolumns>
        </>
      )}
    </BookingContent>
  )
}

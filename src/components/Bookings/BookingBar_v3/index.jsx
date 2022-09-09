import { useBreakpoint } from '@/hooks'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import GuestCard from '@/components/Cards/GuestCard'
import Label from '@/components/Label'
import Title from '@/components/Title'
import {
  BookingBarContainer,
  BookingButton,
  BookingContent,
  Bookingcolumns,
  BookingDate,
  ShowContentButton,
} from './BookingBar.styles'

function BookingBar_v3({
  dates,
  guestValues,
  onGuestChange,
  bookingTitles,
  onDatesChanges,
  buttonProps,
  baseUrl,
}) {
  const bp = useBreakpoint()
  const [showContent, setShowContent] = useState(false)
  const [datesValues, setDatesValues] = useState({
    startDate: null,
    endDate: null,
  })

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
    onDatesChanges(name, value)
  }

  return (
    <BookingBarContainer showContent={showContent}>
      {!showContent ? (
        <Desktop
          handleDatesChanges={handleDatesChanges}
          dates={dates}
          bookingTitles={bookingTitles}
          guestValues={guestValues}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
      ) : (
        <Mobile
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
        <BookingButton onClick={buttonProps.onClick}>
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

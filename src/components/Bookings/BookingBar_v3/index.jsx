import { useBreakpoint } from '@/hooks'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
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
    culmn_1: PropTypes.string,
    culmn_2: PropTypes.string,
    culmn_3: PropTypes.string,
    culmn_4: PropTypes.string,
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
      <BookingCulmns>
        <Label labelText={bookingTitles.culmn_1} />
        <BookingDate
          type="date"
          value={dates?.startDate}
          name="startDate"
          onChange={handleDatesChanges}
        />
      </BookingCulmns>
      <BookingCulmns>
        <Label labelText={bookingTitles.culmn_2} />
        <BookingDate
          type="date"
          value={dates.endDate}
          name="endDate"
          onChange={handleDatesChanges}
        />
      </BookingCulmns>
      <BookingCulmns>
        <GuestCard
          title={bookingTitles.culmn_3}
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
          title={bookingTitles.culmn_4}
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
      <BookingCulmns>
        <Label labelText={bookingTitles.culmn_1} />
        <BookingDate
          type="date"
          value={dates.startDate}
          name="startDate"
          onChange={handleDatesChanges}
        />
      </BookingCulmns>
      {showContent && (
        <>
          <BookingCulmns>
            <Label labelText={bookingTitles.culmn_2} />
            <BookingDate
              type="date"
              value={dates.endDate}
              name="endDate"
              onChange={handleDatesChanges}
            />
          </BookingCulmns>
          <BookingCulmns>
            <GuestCard
              title={bookingTitles.culmn_3}
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
              title={bookingTitles.culmn_4}
              value={guestValues.kids}
              onMinusClick={() => {
                handleMinusClick('kids')
              }}
              onPlusClick={() => {
                handlePlusClick('kids')
              }}
            />
          </BookingCulmns>
        </>
      )}
    </BookingContent>
  )
}

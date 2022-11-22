import PropTypes from 'prop-types'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import { useBreakpoint } from '@/hooks'
import { ChevronDownIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
//components
import { Popover } from '@headlessui/react'
import GuestCard from '@/components/Cards/GuestCard'
import Label from '@/components/Label'
import DatePicker from '@/components/DatePicker'
//styles
import {
  BookingBarContainer,
  BookingButton,
  BookingContent,
  Bookingcolumns,
  ShowContentButton,
  BackButton,
} from './BookingBar.styles'
import { ChevronRight } from '../../Icons'
import RightChevron from '../../Icons/RightChevron'

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
    <BookingBarContainer className="relative" showContent={showContent}>
      {!showContent ? (
        <Desktop
          color={color}
          bgColor={bgColor}
          onDatesChange={onDatesChange}
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
          onDatesChange={onDatesChange}
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
  onDatesChange,
  backLabel = 'Back'
}) {
  // handle Dates Changes
  const onDatesChanges = async (dates) => {
    await onDatesChange(dates)
  }
  const { startDate, endDate } = dates
  const formatDate = (date) => {
    return moment(date).format('MMM DD')
  }
  const guestbtn = useRef(null) // ref for guests button
  const datebtn = useRef(null) // ref for date button

  const [showBackBtn, setShowBackBtn] = useState(false)

  return (
    <Popover.Group className="booking-wrapper">
      <BookingContent>
        <Popover
          className="booking-columns v3"
          onClick={() => {
            datebtn.current.click()
          }}
        >
          {showBackBtn && (
            <BackButton onClick={() => setShowBackBtn(false)}>
              {backLabel}
              <RightChevron width={19} height={19} color={'#6B7280'} />
            </BackButton>
          )}
          <Label labelText={bookingTitles.column_1} />
          <Popover.Button
            className="booking-columns-button"
            aria-label={bookingTitles.column_1}
            onClick={() => setShowBackBtn(true)}
            ref={datebtn}
          >
            <Label
              labelText={startDate ? formatDate(startDate) : 'DD/MM/YYY'}
            />
            <CalendarDaysIcon width={20} height={20} />
          </Popover.Button>
          <Popover.Panel className="panel v3">
            <DatePicker dates={dates} onDatesChange={onDatesChanges} />
          </Popover.Panel>
        </Popover>

        <Popover 
        className="booking-columns v3"
        onClick={() => {
          guestbtn.current.click()
        }}
        >
          <Label labelText={bookingTitles.column_2} />
          <Popover.Button
            className="booking-columns-button"
            aria-label={bookingTitles.column_1}
            onClick={() => setShowBackBtn(true)}
            ref={guestbtn}
          >
            <Label labelText={endDate ? formatDate(endDate) : 'DD/MM/YYY'} />
            <CalendarDaysIcon width={20} height={20} />
          </Popover.Button>
          <Popover.Panel className="panel v3">
            <DatePicker dates={dates} onDatesChange={onDatesChanges} />
          </Popover.Panel>
        </Popover>
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
    </Popover.Group>
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
  onDatesChange,
}) {
  // handle Dates Changes
  const onDatesChanges = async (dates) => {
    await onDatesChange(dates)
  }
  const { startDate, endDate } = dates
  const formatDate = (date) => {
    return moment(date).format('MMM DD')
  }

  return (
    <BookingContent>
      <Bookingcolumns>
        <Popover>
          <Popover.Button
            className="booking-columns-button"
            aria-label={bookingTitles.column_1}
          >
            <Label labelText={endDate ? formatDate(endDate) : 'DD/MM/YYY'} />
            <CalendarDaysIcon width={20} height={20} />
          </Popover.Button>
        </Popover>
      </Bookingcolumns>
      {showContent && (
        <>
          <Bookingcolumns>
            <Popover>
              <Popover.Button
                className="booking-columns-button"
                aria-label={bookingTitles.column_2}
              >
                <Label
                  labelText={endDate ? formatDate(endDate) : 'DD/MM/YYY'}
                />
                <CalendarDaysIcon width={20} height={20} />
              </Popover.Button>
            </Popover>
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

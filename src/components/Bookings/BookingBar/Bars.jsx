import { useRef, useState } from 'react'
import moment from 'moment'
//styles
import {
  DesktopContainer,
  MobileContainer,
  MobileSection,
  Column,
  Row,
  Values,
} from './BookingBar.styles'
//components
import Button from '@/components/Button'
import Label from '@/components/Label'
import DatePicker from '@/components/DatePicker'
import { Popover } from '@headlessui/react'
import Guests from '@/components/Cards/GuestsCard'
//utils
import { bookingUrl } from '@/helpers/utils'
//icons
import { useTheme } from 'styled-components'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

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
// for Desktop and Tablet devices
export const Desktop = function ({
  dates,
  guestValues,
  buttonProps,
  onDatesChange,
  onGuestChange,
  baseUrl,
  title_1,
  title_2,
  guestsTitles,
}) {
  const guestbtn = useRef(null) // ref for guests button
  const [isOpen, setIsOpen] = useState({
    dates: false,
    guests: false,
  })

  // handle Dates Changes
  const onDatesChanges = async (dates) => {
    await onDatesChange(dates)
    if (dates?.startDate && dates?.endDate) {
      setIsOpen({ ...isOpen, dates: false, guests: true })
      guestbtn.current.click()
    }
  }
  const theme = useTheme()
  const { startDate, endDate } = dates
  const formatDate = (date) => {
    return moment(date).format('MMM DD')
  }

  return (
    <Popover.Group style={{ position: 'relative' }}>
      <DesktopContainer data-testid="booking-bar">
        <Column>
          <Row>
            <Label
              color={theme.colors.DatesCore.text}
              role="label"
              labelText={title_1}
              fontSize="sm"
            />
            <Values>
              {startDate &&
                endDate &&
                `${formatDate(startDate)}   -   ${formatDate(endDate)}`}
            </Values>
          </Row>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={
                    open ? 'animate-chevron-down' : 'animate-chevron-up'
                  }
                  aria-label={
                    open ? `close ${title_1} panel` : `open ${title_1} panel`
                  }
                >
                  <Button
                    {...buttonProps}
                    label=""
                    as="div"
                    variant="rounded"
                    Icon={ChevronUpIcon}
                    handleClick={() => {
                      setIsOpen({
                        ...isOpen,
                        dates: true,
                        guests: false,
                      })
                    }}
                  />
                </Popover.Button>
                <Popover.Panel className="panel">
                  <DatePicker dates={dates} onDatesChange={onDatesChanges} />
                </Popover.Panel>
              </>
            )}
          </Popover>
        </Column>
        <Column>
          <Row>
            <Label
              role="label"
              labelText={title_2}
              fontSize="sm"
              color={theme.colors.DatesCore.text}
            />
            <Values>
              {guestValues?.adults > 0 &&
                `(${guestsTitles?.adults}: ${guestValues?.adults}) (${guestsTitles?.kids}: ${guestValues?.kids})`}
            </Values>
          </Row>
          <Popover style={{ zIndex: '10' }}>
            {({ open }) => (
              <>
                <Popover.Button
                  className={
                    open ? 'animate-chevron-down' : 'animate-chevron-up'
                  }
                  aria-label={
                    open ? `close ${title_2} panel` : `open ${title_2} panel`
                  }
                  ref={guestbtn}
                >
                  <Button
                    as="div"
                    {...buttonProps}
                    variant="rounded"
                    Icon={ChevronUpIcon}
                    label=""
                    handleClick={() => {
                      setIsOpen({
                        ...isOpen,
                        dates: false,
                        guests: !isOpen.guests,
                      })
                    }}
                  />
                </Popover.Button>
                <Popover.Panel className="panel">
                  <Guests
                    title={title_2}
                    guestValues={guestValues}
                    buttonProps={buttonProps}
                    onGuestChange={onGuestChange}
                    guestsTitles={guestsTitles}
                  />
                </Popover.Panel>
              </>
            )}
          </Popover>
        </Column>
        <div className="desktop-action">
          <Button
            {...buttonProps}
            label="Check Availability"
            handleClick={() => checkAvailability(dates, guestValues, baseUrl)}
          />
        </div>
      </DesktopContainer>
    </Popover.Group>
  )
}

// for Mobile devices, not ready for now
export const Mobile = function ({
  dates,
  guestValues,
  buttonProps,
  onDatesChange,
  onGuestChange,
  baseUrl,
  title_1,
  title_2,
  guestsTitles,
}) {
  const guestbtn = useRef(null) // ref for guests button
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
  const theme = useTheme()

  const { startDate, endDate } = dates
  const formatDate = (date) => {
    return moment(date).format('MMM DD')
  }

  return (
    <MobileContainer data-testid="booking-bar">
      {isOpen.dates && (
        <div className="panel-mobile">
          <DatePicker
            dates={dates}
            onDatesChange={onDatesChanges}
            verticalHeight={800}
          />
        </div>
      )}

      <MobileSection>
        <Column>
          <Row>
            <Label
              role="label"
              labelText={title_1}
              color={theme.colors.DatesCore.text}
            />
            <Values>
              {startDate &&
                endDate &&
                `${formatDate(startDate)}   -   ${formatDate(endDate)}`}
            </Values>
          </Row>
          <Button
            as="div"
            {...buttonProps}
            variant="rounded"
            Icon={ChevronUpIcon}
            label=""
            handleClick={() => {
              setIsOpen({
                ...isOpen,
                dates: !isOpen.dates,
                guests: false,
              })
            }}
          />
        </Column>
      </MobileSection>

      {isOpen.guests && (
        <div className="guest-panel">
          <Guests
            guestValues={guestValues}
            buttonProps={buttonProps}
            onGuestChange={onGuestChange}
          />
        </div>
      )}
      <MobileSection>
        <Column>
          <Row>
            <Label
              role="label"
              labelText={title_2}
              fontSize="sm"
              color={theme.colors.DatesCore.text}
            />
            <Values>
              {guestValues?.adults > 0 &&
                `(${guestsTitles?.adults}: ${guestValues?.adults}) (${guestsTitles?.kids}: ${guestValues?.kids})`}
            </Values>
          </Row>
          <Button
            ref={guestbtn}
            {...buttonProps}
            variant="rounded"
            Icon={ChevronUpIcon}
            label=""
            handleClick={() => {
              setIsOpen({
                ...isOpen,
                dates: false,
                guests: !isOpen.guests,
              })
            }}
          />
        </Column>
      </MobileSection>
      <div style={{ marginTop: '1.5rem' }}>
        <Button
          {...buttonProps}
          label="Check Availability"
          handleClick={() => {
            setIsOpen({
              ...isOpen,
              dates: false,
              guests: false,
            })
            checkAvailability(dates, guestValues, baseUrl)
          }}
        />
      </div>
    </MobileContainer>
  )
}

// get the breakpoint
export const getBreakpoint = (bp, props) => {
  switch (bp) {
    case 'xs':
      return <Mobile {...props} />
    case 'sm':
      return <Mobile {...props} />
    default:
      return <Desktop {...props} />
  }
}

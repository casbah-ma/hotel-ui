import { Popover } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import Button from '../../Button'
import DatePicker from '../../DatePicker'
import Label from '../../Label'
import {
  BookingButton,
  BookingContent,
  BookngContainer,
  BookingContentLeft,
  BookingContentRight,
} from './BookingBar.styles'

function BookingBa_v2({ dates, bookingTitle, buttonProps }) {
  const { text, onClick } = buttonProps
  return (
    <Popover.Group style={{ position: 'relative' }}>
      <BookngContainer>
        <BookingContent>
          <BookingContentLeft>
            <Label
              role="label"
              labelText={bookingTitle.title_1}
              fontSize="sm"
            />
            <Popover>
              <Popover.Button>
                <Button
                  as="div"
                  variant="rounded"
                  bgColor="white"
                  Icon={ChevronUpIcon}
                />
              </Popover.Button>
              <Popover.Panel className="datesPanel">
                <DatePicker dates={dates} />
              </Popover.Panel>
            </Popover>
          </BookingContentLeft>
          <BookingContentRight>
            <Label
              role="label"
              labelText={bookingTitle.title_2}
              fontSize="sm"
            />
            <Button variant="rounded" bgColor="white" Icon={ChevronUpIcon} />
          </BookingContentRight>
        </BookingContent>
        <BookingButton onClick={onClick}>{text}</BookingButton>
      </BookngContainer>
    </Popover.Group>
  )
}

BookingBa_v2.propTypes = {}

export default BookingBa_v2

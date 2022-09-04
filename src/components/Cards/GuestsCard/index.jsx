import Title from '@/components/Title'
import Quantity from '@/components/Quantity'
import { GuestBooking, GuestValues } from './Guests.styles'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

const Guests = ({
  guestValues,
  buttonProps,
  onGuestChange,
  title,
  centred,
}) => {
  const theme = useTheme()
  const handlePlusClick = (type) => {
    onGuestChange(type, guestValues[type] + 1)
  }
  const handleMinusClick = (type) => {
    onGuestChange(type, guestValues[type] - 1)
  }
  return (
    <GuestBooking data-testid="guests-card-container" centred={centred}>
      {title && (
        <Title title={title} level="3" color={theme.colors.DatesCore.text} />
      )}
      <GuestValues>
        <Quantity
          title="Adults :"
          value={guestValues?.adults}
          buttonProps={buttonProps}
          onPlusClick={() => handlePlusClick('adults')}
          onMinusClick={() => handleMinusClick('adults')}
        />
        <Quantity
          title="Kids :"
          value={guestValues?.kids}
          buttonProps={buttonProps}
          onPlusClick={() => handlePlusClick('kids')}
          onMinusClick={() => handleMinusClick('kids')}
        />
      </GuestValues>
    </GuestBooking>
  )
}

Guests.propTypes = {
  guestValues: PropTypes.shape({
    adults: PropTypes.number,
    kids: PropTypes.number,
  }),
  buttonProps: PropTypes.object,
  handleGuestChange: PropTypes.func,
}
export default Guests

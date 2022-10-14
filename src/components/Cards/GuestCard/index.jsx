import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import Button from '@/components/Button'
import Label from '@/components/Label'
import {
  GuestActionsContainer,
  GuestContainer,
  GuestActions,
} from './GuestCard.styles'
import theme from '../../../../theme'
import { bg } from 'date-fns/locale'

function GuestCard({
  title,
  onMinusClick,
  onPlusClick,
  value,
  color,
  bgColor,
}) {
  return (
    <GuestContainer data-testid="guest-card-container">
      <Label labelText={title} color={theme.colors.DatesCore.text} />
      <GuestActionsContainer>
        <Label
          labelText={value?.toString()}
          fontSize="md"
          color={theme.colors.DatesCore.text}
        />
        <GuestActions>
          <Button
            ariaLabel={`decrease ${title} amount`}
            {...{
              variant: 'rounded',
              Icon: MinusIcon,
              label: '',
              disabled: value === 0,
            }}
            handleClick={onMinusClick}
            bgColor={bgColor}
          />
          <Button
            ariaLabel={`increase ${title} amount`}
            {...{
              variant: 'rounded',
              Icon: PlusIcon,
              label: '',
            }}
            handleClick={onPlusClick}
            bgColor={bgColor}
          />
        </GuestActions>
      </GuestActionsContainer>
    </GuestContainer>
  )
}

GuestCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onMinusClick: PropTypes.func,
  onPlusClick: PropTypes.func,
}

export default GuestCard

import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import Button from '../../Button'
import Label from '../../Label'
import {
  GuestActionsContainer,
  GuestContainer,
  GuestActions,
} from './GuestCard.styles'
import theme from '../../../../theme'

function GuestCard({ title, onMinusClick, onPlusClick, value }) {
  return (
    <GuestContainer>
      <Label labelText={title} color={theme.colors.DatesCore.text} />
      <GuestActionsContainer>
        <Label
          labelText={value?.toString()}
          fontSize="md"
          color={theme.colors.DatesCore.text}
        />
        <GuestActions>
          <Button
            testID={'minus-button'}
            aria-label="minus-button"
            aria-hidden="false"
            {...{
              variant: 'rounded',
              Icon: MinusIcon,
              label: '',
              disabled: value === 0,
            }}
            handleClick={onMinusClick}
          />
          <Button
            testID={'plus-button'}
            aria-label="plus-button"
            aria-hidden="false"
            {...{
              variant: 'rounded',
              Icon: PlusIcon,
              label: '',
            }}
            handleClick={onPlusClick}
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

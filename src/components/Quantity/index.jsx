import Label from '@/components/Label'
import Button from '@/components/Button'
import { QuantityContainer, QuantityButtonContainer } from './Quantity.styles'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'styled-components'

const Quantity = function ({
  title,
  value,
  buttonProps,
  onPlusClick,
  onMinusClick,
}) {
  const theme = useTheme()
  return (
    <QuantityContainer data-testid="quantity">
      <Label labelText={title} color={theme.colors.DatesCore.text} />
      <QuantityButtonContainer>
        <Button
          testID={'minus-button'}
          aria-label="minus-button"
          aria-hidden="false"
          {...buttonProps}
          {...{
            variant: 'rounded',
            Icon: MinusIcon,
            label: '',
            disabled: value === 0,
          }}
          handleClick={onMinusClick}
        />
        <Label
          testID="value"
          labelText={value?.toString()}
          color={theme.colors.DatesCore.text}
        />
        <Button
          testID={'plus-button'}
          aria-label="plus-button"
          aria-hidden="false"
          {...buttonProps}
          {...{ variant: 'rounded', Icon: PlusIcon, label: '' }}
          handleClick={onPlusClick}
        />
      </QuantityButtonContainer>
    </QuantityContainer>
  )
}

export default Quantity

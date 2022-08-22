import Label from '@/components/Label'
import Button from '@/components/Button'
import { QuantityContainer, QuantityButtonContainer } from './Quantity.styles'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'

const Quantity = function ({
  title,
  value,
  buttonProps,
  onPlusClick,
  onMinusClick,
}) {
  return (
    <QuantityContainer data-testid="quantity">
      <Label labelText={title} />
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
        <Label testID="value" labelText={value?.toString()} />
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

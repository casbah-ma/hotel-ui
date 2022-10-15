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
          ariaLabel={`decrease ${title} amount`}
          {...buttonProps}
          variant="rounded"
          Icon={MinusIcon}
          label=""
          disabled={value === 0}
          handleClick={onMinusClick}
        />
        <Label
          labelText={value?.toString()}
          color={theme.colors.DatesCore.text}
        />
        <Button
          ariaLabel={`increase ${title} amount`}
          {...buttonProps}
          variant="rounded"
          Icon={PlusIcon}
          label=""
          handleClick={onPlusClick}
        />
      </QuantityButtonContainer>
    </QuantityContainer>
  )
}

export default Quantity

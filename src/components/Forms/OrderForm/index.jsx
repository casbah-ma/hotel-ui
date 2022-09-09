import Input from '@/components/Inputs/Input_v2'
import {
  OrderFormContainer,
  StyledButton,
  FormContent,
  QuantityField,
  TotalField,
} from './Orderform.styles'
import PropTypes from 'prop-types'
import Quantity from '@/components/Quantity'
import { useEffect } from 'react'

const OrderForm = function ({
  formInputs,
  buttonProps,
  onquantityChange,
  onChange,
  onClick,
}) {
  useEffect(() => {
    calcTotal()
  }, [formInputs.quantity])

  const calcTotal = () => {
    onquantityChange('total', formInputs['amount'] * formInputs['quantity'])
  }
  const handlePlusClick = (type) => {
    onquantityChange(type, formInputs[type] + 1)
  }
  const handleMinusClick = (type) => {
    onquantityChange(type, formInputs[type] - 1)
  }
  return (
    <OrderFormContainer data-testid="OrderForm-container">
      <FormContent>
        <Input
          testID="amount"
          name="amount"
          value={formInputs?.amount.toString()}
          error={!!formInputs?.amountError}
          color="#CBCBCB"
          bgColor="#FCFCFC"
          placeHolder="Amount"
          onChange={onChange}
          currency={formInputs?.currency}
        />
        <QuantityField>
          <Quantity
            testID="quantity"
            title="Quantity :"
            value={formInputs?.quantity}
            buttonProps={buttonProps}
            onChange={() => calcTotal('quantity')}
            onPlusClick={() => handlePlusClick('quantity')}
            onMinusClick={() => handleMinusClick('quantity')}
          />
        </QuantityField>
        <TotalField data-testid="total">
          {formInputs?.totalText}
          <span>
            {(formInputs?.total === 0
              ? formInputs?.amount
              : formInputs?.total) +
              ' ' +
              formInputs?.currency}
          </span>
        </TotalField>
      </FormContent>
      <StyledButton data-testid="submit-button" onClick={onClick}>
        {formInputs?.buttonLabel}
      </StyledButton>
    </OrderFormContainer>
  )
}

OrderForm.propTypes = {
  formInputs: PropTypes.shape({
    amount: PropTypes.number,
    amountError: PropTypes.string,
    quantity: PropTypes.number,
    total: PropTypes.number,
    currency: PropTypes.string,
    buttonLabel: PropTypes.string,
    totalText: PropTypes.string,
  }),
  buttonProps: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default OrderForm

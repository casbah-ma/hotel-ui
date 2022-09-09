import Input from '@/components/Inputs/Input_v2'
import {
  Formv4Container,
  FormContent,
  QuantityField,
  TotalField,
  StyledLine,
  BottomField,
} from './Form.styles'
import PropTypes from 'prop-types'
import Quantity from '@/components/Quantity'
import { useEffect } from 'react'
import Button from '@/components/Button'

const Form_v4 = function ({
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
    <Formv4Container data-testid="Form_v4-container">
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
          focus="#000000"
        />
        <QuantityField>
          <Quantity
            testID="quantity"
            title="Choose the needed quantity :"
            value={formInputs?.quantity}
            buttonProps={buttonProps}
            onChange={() => calcTotal('quantity')}
            onPlusClick={() => handlePlusClick('quantity')}
            onMinusClick={() => handleMinusClick('quantity')}
          />
        </QuantityField>
        <StyledLine></StyledLine>
        <BottomField>
        <TotalField data-testid="total">
          {formInputs?.totalText}
          <span className='ml-3'>
            {(formInputs?.total === 0
              ? formInputs?.amount
              : formInputs?.total) +
              ' ' +
              formInputs?.currency}
          </span>
        </TotalField>
        <Button
        testID="submit-button"
        bgColor="#000000"
        color="#fff"
        label={formInputs?.buttonLabel}
        onClick={onClick}
        variant="secondary"
      />
        </BottomField>
      </FormContent>
    </Formv4Container>
  )
}

Form_v4.propTypes = {
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

export default Form_v4

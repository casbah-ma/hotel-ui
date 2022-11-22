import PropTypes from 'prop-types'
import { StyledInput, InputContainer, InputButton } from './Input.styles'
import Button from '@/components/Button'

const Input = ({
  name,
  color,
  bgColor,
  type,
  value,
  error,
  placeHolder,
  onChange,
  size,
  withButton,
  buttonProps,
  testID,
  placeHolderColor,
}) => {
  const { buttonLabel, buttonColor, buttonBgColor, onClick, buttonTestID, rounded=true } =
    buttonProps
  return (
    <InputContainer>
      <StyledInput
        withButton={withButton}
        data-testid={testID}
        name={name}
        color={color}
        bgColor={bgColor}
        as={type}
        isTextaria={type === 'textarea'}
        aria-label={placeHolder}
        error={error}
        value={value}
        placeholder={placeHolder}
        size={size}
        onChange={onChange}
        placeHolderColor={placeHolderColor}
      />
      {withButton && (
        <InputButton
          data-testid={buttonTestID}
          bgColor={buttonBgColor}
          color={buttonColor}
          onClick={onClick}
          rounded={rounded}
        >
          {buttonLabel}
        </InputButton>
      )}
    </InputContainer>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['input', 'textarea']),
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  placeHolderColor: PropTypes.bool,
  onChange: PropTypes.func,
  withButton: PropTypes.bool,
  buttonProps: PropTypes.shape({
    buttonLabel: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonBgColor: PropTypes.string,
    onClick: PropTypes.func,
  }),
}

Input.defaultProps = {
  type: 'input',
  onChange: undefined,
  withButton: false,
  buttonProps: {
    buttonLabel: '',
    buttonColor: 'primary',
    buttonBgColor: 'primary',
    onClick: undefined,
  },
}

export default Input

import PropTypes from 'prop-types'
import { StyledInput, InputContainer} from './Input.styles'

const Input_v2 = ({
  name,
  color,
  bgColor,
  type,
  value,
  error,
  placeHolder,
  onChange,
  size,
  testID,
  focus,
}) => {
  return (
    <InputContainer>
      <StyledInput
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
        focus={focus}
      />
    </InputContainer>
  )
}

Input_v2.propTypes = {
  type: PropTypes.oneOf(['input', 'textarea']),
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
}

Input_v2.defaultProps = {
  type: 'input',
  onChange: undefined,
}

export default Input_v2

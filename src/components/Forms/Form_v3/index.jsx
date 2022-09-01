import Input from '@/components/Inputs/Input_v2'
import { Formv2Container, StyledButton, StyledLine } from './Form.styles'
import PropTypes from 'prop-types'
import Button from '@/components/Button'


const Form_v2 = function ({ formInputs, onChange, onClick }) {
  const {
    fullName,
    fullNameError,
    email,
    emailError,
    message,
    messageError,
    buttonLabel,
  } = formInputs
  return (
    <Formv2Container data-testid="Formv3-container">
    <Input
      testID="fullName"
      name="fullName"
      value={fullName}
      error={!!fullNameError}
      color="#CBCBCB"
      bgColor="#FAFAFA"
      onChange={onChange}
      placeHolder="Full Name"
      focus="#000000"
    />
    <Input
      testID="email"
      name="email"
      error={!!emailError}
      color="#CBCBCB"
      bgColor="#FAFAFA"
      onChange={onChange}
      placeHolder="Email"
      value={email}
      focus="#000000"
    />
    <Input
      testID="message"
      name="message"
      error={!!messageError}
      type="textarea"
      color="#CBCBCB"
      bgColor="#FAFAFA"
      onChange={onChange}
      placeHolder="Message"
      value={message}
      size="12.5rem"
      focus="#000000"
    />
    <StyledLine></StyledLine>
    <StyledButton>
    <Button
        testID="submit-button"
        bgColor="#000000"
        color="#fff"
        label="Submit your message"
        onClick={onClick}
        variant="secondary"
      />
    </StyledButton>
  </Formv2Container>
  )
}

Form_v2.propTypes = {
  formInputs: PropTypes.shape({
    fullName: PropTypes.string,
    fullNameError: PropTypes.string,
    email: PropTypes.string,
    emailError: PropTypes.string,
    message: PropTypes.string,
    messageError: PropTypes.string,
    buttonLabel: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default Form_v2

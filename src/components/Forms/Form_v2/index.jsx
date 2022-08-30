import Input from '@/components/Inputs/Input_v2'
import { Formv2Container, StyledButton, FormContent } from './Form.styles'
import PropTypes from 'prop-types'

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
    <Formv2Container data-testid="Formv2-container">
      <FormContent>
        <Input
          testID="fullName"
          name="fullName"
          value={fullName}
          error={!!fullNameError}
          color="#CBCBCB"
          onChange={onChange}
          placeHolder="Full Name"
        />
        <Input
          testID="email"
          name="email"
          error={!!emailError}
          color="#CBCBCB"
          onChange={onChange}
          placeHolder="Email"
          value={email}
        />
        <Input
          testID="message"
          name="message"
          error={!!messageError}
          type="textarea"
          color="#CBCBCB"
          onChange={onChange}
          placeHolder="Message"
          value={message}
        />
      </FormContent>
      <StyledButton data-testid="submit-button" onClick={onClick}>
        {buttonLabel}
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

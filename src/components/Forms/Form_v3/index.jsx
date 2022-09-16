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
    whithline,
    color= '#000000',
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
      focus={color}
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
      focus={color}
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
      focus={color}
    />
    {
      whithline && 
    <StyledLine></StyledLine>
    }
    <StyledButton>
    <Button
        testID="submit-button"
        bgColor={color}
        color="#fff"
        label={buttonLabel}
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
    whithline:PropTypes.boolean,
    color:PropTypes.string,
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default Form_v2

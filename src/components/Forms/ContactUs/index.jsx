import Input from '@/components/Input'
import Button from '@/components/Button'
import { ContactusContainer } from './Contactus.styles'
import PropTypes from 'prop-types'

const ContactUs = function ({ formInputs, onChange, onClick }) {
  const { fullName, fullNameError, email, emailError, message, messageError } =
    formInputs
  return (
    <ContactusContainer data-testid="contactus-container">
      <Input
        testID="fullName"
        name="fullName"
        value={fullName}
        error={!!fullNameError}
        color="black"
        onChange={onChange}
        placeHolder="Full Name"
      />
      <Input
        testID="email"
        name="email"
        error={!!emailError}
        color="black"
        onChange={onChange}
        placeHolder="Email"
        value={email}
      />
      <Input
        testID="message"
        name="message"
        error={!!messageError}
        type="textarea"
        color="black"
        onChange={onChange}
        placeHolder="Message"
        value={message}
      />
      <Button
        testID="submit-button"
        bgColor="secondary"
        color="secondary"
        label="Submit"
        onClick={onClick}
        variant="primary"
      />
    </ContactusContainer>
  )
}

ContactUs.propTypes = {
  formInputs: PropTypes.shape({
    fullName: PropTypes.string,
    fullNameError: PropTypes.string,
    email: PropTypes.string,
    emailError: PropTypes.string,
    message: PropTypes.string,
    messageError: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default ContactUs

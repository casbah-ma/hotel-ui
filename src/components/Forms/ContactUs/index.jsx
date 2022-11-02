import Input from '@/components/Inputs/Input'
import Button from '@/components/Button'
import { ContactusContainer } from './Contactus.styles'
import PropTypes from 'prop-types'

const ContactUs = function ({ formInputs, onChange, onClick}) {
  const { fullName, fullNameError,placeHolder, email, emailError, message, messageError, bgColor , color , buttonLabel, t } =
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
        placeHolder={t("placeHolder")}
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
        bgColor={bgColor}
        color={color}
        label={t("buttonLabel")}
        onClick={onClick}
        variant="primary"
      />
    </ContactusContainer>
  )
}

ContactUs.propTypes = {
  formInputs: PropTypes.shape({
    buttonLabel: PropTypes.string,
    fullName: PropTypes.string,
    fullNameError: PropTypes.string,
    placeHolder: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    email: PropTypes.string,
    emailError: PropTypes.string,
    message: PropTypes.string,
    messageError: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default ContactUs

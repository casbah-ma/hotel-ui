import PropTypes from 'prop-types'
import { buttonsVariant, StyledButton, StyledIcon } from './Button.styles'

const Button = ({
  variant,
  label,
  ariaLabel,
  Icon,
  color,
  bgColor,
  border,
  disabled,
  handleClick,
  testID,
  as,
  t,
}) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      as={as}
      data-testid={testID}
      variant={variant}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
      onClick={handleClick}
      border={border}
    >
      {t ? t(label) : label}
      {Icon && (
        <StyledIcon variant={variant} color={color} bgColor={bgColor}>
          <Icon />
        </StyledIcon>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(buttonsVariant)),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  as: PropTypes.string,
  t: PropTypes.func,
}

Button.defaultProps = {
  onClick: undefined,
}

export default Button

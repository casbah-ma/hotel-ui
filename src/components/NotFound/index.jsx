import Paragraph from '@/components/Paragraph'
import { NotFoundContainer, StyledText, StyledTitle } from './NotFound.styles'
import PropTypes from 'prop-types'
import { NotFound2, NotFoundVector } from '../Icons'
import Button from '../Button'

const Unfound = function ({
  title,
  text,
  btnLabel,
  handleClick,
  color,
  btnColor,
  btnBgColor,
}) {
  return (
    <NotFoundContainer data-testid="container">
      <NotFoundVector />
      <NotFound2 />
      <StyledTitle color={color}>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      <Button
        color={btnColor}
        bgColor={btnBgColor}
        label={btnLabel}
        variant="secondary"
        handleClick={handleClick}
      />
    </NotFoundContainer>
  )
}

Unfound.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnLabel: PropTypes.string,
}

export default Unfound

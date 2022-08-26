import { labelFontSizes } from '@/styles/theming'
import PropTypes from 'prop-types'
import { LabelText } from './Label.styles'

function Label({ labelText, fontSize, color, testID }) {
  return (
    <LabelText data-testid={testID} fontSize={fontSize} color={color}>
      {labelText}
    </LabelText>
  )
}

Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(Object.keys(labelFontSizes)),
}

export default Label

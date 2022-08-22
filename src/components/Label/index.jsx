import { labelFontSizes } from '@/styles/theming'
import PropTypes from 'prop-types'
import { LabelText } from './Label.styles'

function Label({ labelText, fontSize, testID }) {
  return (
    <LabelText data-testid={testID} fontSize={fontSize}>
      {labelText}
    </LabelText>
  )
}

Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(Object.keys(labelFontSizes)),
}

export default Label

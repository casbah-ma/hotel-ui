import { Description } from './Paragraph.styles'
import PropTypes from 'prop-types'
import { fontSizes } from '@/styles/theming'

const Paragraph = function ({ description, fontSize = 'rg', color = 'black' }) {
  return <Description fontSize={fontSize} color={color}>{description}</Description>
}

Paragraph.propTypes = {
  description: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  color: PropTypes.string,
}

Paragraph.defaultProps = {
  fontSize: 'rg',
}
export default Paragraph

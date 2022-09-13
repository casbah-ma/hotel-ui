import { Description } from './Paragraph.styles'
import PropTypes from 'prop-types'
import { fontSizes } from '@/styles/theming'

const Paragraph = function ({ description, fontSize = 'sm' }) {
  return <Description fontSize={fontSize}>{description}</Description>
}

Paragraph.propTypes = {
  description: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
}

Paragraph.defaultProps = {
  fontSize: 'rg',
}
export default Paragraph

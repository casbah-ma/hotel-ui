import { Heading } from './Title.styles'
import PropTypes from 'prop-types'
import { titleLeveles } from '@/styles/theming'

const Title = function ({ title, level = '1', color, withLine = false }) {
  return (
    <Heading as={`h${level}`} level={level} color={color} withLine={withLine}>
      {title}
    </Heading>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.oneOf(Object.keys(titleLeveles)),
  color: PropTypes.string,
  withLine: PropTypes.bool,
}

export default Title

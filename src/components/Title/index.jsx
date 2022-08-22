import { Heading } from './Title.styles'
import PropTypes from 'prop-types'
import { titleLeveles } from '@/styles/theming'

const Title = function ({ title, level, color }) {
  return (
    <Heading as={`h${level}`} level={level} color={color}>
      {title}
    </Heading>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.oneOf(Object.keys(titleLeveles)),
  color: PropTypes.string,
}

Title.defaultProps = {
  level: '1',
}

export default Title

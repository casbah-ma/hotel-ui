import PropTypes from 'prop-types'
//styles
import {
  spacingTop,
  sapcingBottom,
  sapcingLeft,
  sapcingRight,
} from '@/styles/theming'
import { Section } from './Spacing.styles'

function Spacing({ children, mt, mb, pl, pr, centre }) {
  return (
    <Section mt={mt} mb={mb} pl={pl} pr={pr} centre={centre}>
      {children}
    </Section>
  )
}

Spacing.propTypes = {
  mt: PropTypes.oneOf(Object.keys(spacingTop)),
  mb: PropTypes.oneOf(Object.keys(sapcingBottom)),
  ml: PropTypes.oneOf(Object.keys(sapcingLeft)),
  mr: PropTypes.oneOf(Object.keys(sapcingRight)),
  centre: PropTypes.bool,
}

Spacing.default = {
  centre: false,
}

export default Spacing

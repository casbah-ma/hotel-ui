import PropTypes from 'prop-types'
import { Conatiner } from './ImportantInfo.styles'
import Blog from '../Blogs/Blog'
import Accordion from '../Accordion'

function ImportantInfo({ blogProps, accordionProps }) {
  return (
    <Conatiner>
      <Blog {...blogProps} />
      <Accordion {...accordionProps} />
    </Conatiner>
  )
}

ImportantInfo.propTypes = {
  blogProps: PropTypes.shape(Blog.propTypes),
  accordionProps: PropTypes.shape(Accordion.propTypes),
}

export default ImportantInfo

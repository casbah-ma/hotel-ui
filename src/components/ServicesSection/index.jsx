import PropTypes from 'prop-types'
//components
import Blog from '@/components/Blogs/Blog'
import ServicesGrid from '@/components/ServicesGrid'
//stories
import { FlexWrapper } from './ServicesSection.styles'

function ServicesSection({ blogProps, servicesProps }) {
  return (
    <FlexWrapper>
      <Blog {...blogProps} />
      <ServicesGrid {...servicesProps} />
    </FlexWrapper>
  )
}

ServicesSection.propTypes = {
  blogProps: PropTypes.shape({ ...Blog.propTypes }),
  servicesProps: PropTypes.shape(ServicesGrid.propTypes),
}

export default ServicesSection

import PropTypes from 'prop-types'
//components
import Blog from '@/components/Blog'
import ServicesGrid from '@/components/ServicesGrid'
//stories
import { FlexWrapper } from './ServicesSection.styles'

function ServicesSection({ blogProps, services }) {
  return (
    <FlexWrapper>
      <Blog {...blogProps} />
      <ServicesGrid services={services} />
    </FlexWrapper>
  )
}

ServicesSection.propTypes = {
  blogProps: PropTypes.shape({ ...Blog.propTypes }),
  servicesProps: PropTypes.shape(ServicesGrid.propTypes.services),
}

export default ServicesSection

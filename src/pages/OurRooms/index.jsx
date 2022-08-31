import PropTypes from 'prop-types'
//componenst
import { Hero } from '@/src/components/Heroseros'
import Spacing from '@/components/Spacing'
import Blog from '@/components/Blog'
import CategoriesCardsSection from '@/components/CategoriesCardsSection'
import ServicesSection from '@/components/ServicesSection'
import Layout from '@/components/Layout'

function OurRooms({
  layoutProps,
  heroProps,
  blogProps,
  categoriesCardsProps,
  servicesProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <CategoriesCardsSection {...categoriesCardsProps} />
      <Spacing mt="lg" mb="lg" pl="sm" pr="lg">
        <ServicesSection {...servicesProps} />
      </Spacing>
    </Layout>
  )
}

OurRooms.propTypes = {}

export default OurRooms

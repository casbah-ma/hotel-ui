import { Hero } from '@/components/Heros/Hero'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'
import Blog from '@/components/Blog'
import Contacts from '@/components/Contacts'

const Offers = function ({
  layoutProps,
  heroProps,
  blogProps,
  CardsSwiperProps,
  ContactsProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <Spacing mt="lg" pl="sm" centre={true}>
        <Swiper {...CardsSwiperProps} />
      </Spacing>
      <Spacing mt="lg" pl="sm" centre={true}>
        <Swiper {...CardsSwiperProps} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="sm" centre={true}>
        <Swiper {...CardsSwiperProps} />
      </Spacing>
      <Contacts {...ContactsProps} />
    </Layout>
  )
}

export default Offers

import { Hero } from '@/components/Heros'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'

const Offer = function ({
  layoutProps,
  heroProps,
  blogProps,
  blogProps1,
  imagesSwiperProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="sm">
        <Blog {...blogProps1} />
      </Spacing>
      <Spacing pl="sm" centre={true}>
        <Swiper {...imagesSwiperProps} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
    </Layout>
  )
}

export default Offer

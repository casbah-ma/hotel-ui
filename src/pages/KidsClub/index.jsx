import { Hero, AnimatedHero } from '@/src/components/Heroseros'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'

const Activities = function ({
  layoutProps,
  heroProps,
  blogProps,
  blogProps1,
  blogProps2,
  imagesSwiperProps,
  AnimatedHeroProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <Spacing mb="lg" pl="sm">
        <Blog {...blogProps1} />
      </Spacing>
      <AnimatedHero {...AnimatedHeroProps} />
      <Spacing mt="lg" mb="lg" pr="sm">
        <Blog {...blogProps2} />
      </Spacing>
      <Spacing mb="lg" pl="sm">
        <Blog {...blogProps1} />
      </Spacing>
      <Spacing pl="sm" mb="lg" centre={true}>
        <Swiper {...imagesSwiperProps} />
      </Spacing>
    </Layout>
  )
}

export default Activities

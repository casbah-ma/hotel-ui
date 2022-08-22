import { Hero, AnimatedHero } from '@/components/Heros'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swiper'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'

const Dine = function ({
  layoutProps,
  HeroProps,
  BlogProps,
  BlogProps1,
  BlogProps2,
  ImagesSwiperProps,
  AnimatedHeroProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...HeroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...BlogProps} />
      </Spacing>
      <Spacing mb="lg" pl="sm">
        <Blog {...BlogProps1} />
      </Spacing>
      <Spacing pr="sm">
        <Blog {...BlogProps2} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="sm" centre={true}>
        <Swiper {...ImagesSwiperProps} />
      </Spacing>
      <AnimatedHero {...AnimatedHeroProps} />
    </Layout>
  )
}

export default Dine

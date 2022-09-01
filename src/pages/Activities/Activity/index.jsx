import Layout from '@/components/Layout'
import Blog from '@/components/Blog'
import { AnimatedHero, Hero } from '@/components/Heros/Hero'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'

const Activity = ({
  layoutProps,
  heroProps,
  blogProps,
  blogProps1,
  ImagesSwiperProps,
  AnimatedHeroProps,
}) => {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <AnimatedHero {...AnimatedHeroProps} />
      <Spacing mt="lg" mb="lg" pl="sm" centre={true}>
        <Swiper {...ImagesSwiperProps} />
      </Spacing>
      <Spacing mb="lg" pl="md" pr="lg">
        <Blog {...blogProps1} />
      </Spacing>
    </Layout>
  )
}
export default Activity

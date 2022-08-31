import Layout from '@/components/Layout'
import Blog from '@/components/Blog'
import { AnimatedHero, Hero } from '@/src/components/Heroseros'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'

const Experience = ({
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
export default Experience

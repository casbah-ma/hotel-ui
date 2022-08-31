// components
import { Hero, AnimatedHero } from '@/src/components/Heroseros'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import Button from '@/components/Button'
import SpaCategories from '@/components/SpaCategories'
import Layout from '@/components/Layout'

const image =
  'https://images.unsplash.com/photo-1596436891234-ab1fbd9353e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

const SpaWellness = function ({
  layoutProps,
  actionProps,
  spaCategoriesProps,
  BlogProps,
  BlogProps1,
  BlogProps2,
  ImagesSwiperProps,
  AnimatedHeroProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero
        subtitle="Watch anywhere. Cancel anytime."
        title="SPA & Wellness"
        image={image}
      >
        <Button {...actionProps} />
      </Hero>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...BlogProps} />
      </Spacing>
      <Spacing mb="lg">
        <AnimatedHero {...AnimatedHeroProps} />
      </Spacing>
      <SpaCategories {...spaCategoriesProps} />
      <Spacing mt="lg" mb="lg" pl="sm">
        <Blog {...BlogProps1} />
      </Spacing>
      <Spacing pr="sm">
        <Blog {...BlogProps2} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="sm">
        <Swiper {...ImagesSwiperProps} />
      </Spacing>
      <Spacing mb="lg" pl="sm">
        <Blog {...BlogProps1} />
      </Spacing>
      <Spacing pr="sm" mb="lg">
        <Blog {...BlogProps2} />
      </Spacing>
    </Layout>
  )
}

export default SpaWellness

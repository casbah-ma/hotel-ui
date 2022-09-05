import { Hero, AnimatedHero } from '@/components/Heros'
import Blog from '@/components/Blogs/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
const Dine = function ({
  SwiperProps,
  BlogProps,
  BlogProps1,
  BlogProps2,
  BlogProps3,
  ImagesSwiperProps,
}) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <Hero subtitle="Watch anywhere. Cancel anytime." title="Bienvenue" />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...BlogProps} />
      </Spacing>
      <Swiper {...SwiperProps} />
      <Spacing mt="lg" mb="lg" pl="sm">
        <Blog {...BlogProps1} />
      </Spacing>
      <Spacing pr="sm">
        <Blog {...BlogProps2} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...BlogProps3} />
      </Spacing>
      <AnimatedHero image="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80" />
      <Spacing mt="lg" mb="lg">
        <Swiper {...ImagesSwiperProps} />
      </Spacing>
      <Spacing mb="lg" pl="sm">
        <Blog {...BlogProps1} />
      </Spacing>
      <Spacing pr="sm">
        <Blog {...BlogProps2} />
      </Spacing>
    </div>
  )
}

export default Dine

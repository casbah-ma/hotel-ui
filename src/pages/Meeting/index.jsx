// components
import { Hero } from '@/components/Heros'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import Button from '@/components/Button'
import MeetingCategories from '@/components/MeetingCategories'
import Layout from '@/components/Layout'

const image =
  'https://images.unsplash.com/photo-1596436891234-ab1fbd9353e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

const Meeting = function ({
  layoutProps,
  actionProps,
  meetingCategoriesProps,
  blogProps,
  swiperProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero
        subtitle="Watch anywhere. Cancel anytime."
        title="Meeting"
        image={image}
      >
        <Button {...actionProps} />
      </Hero>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>

      <MeetingCategories {...meetingCategoriesProps} />

      <Spacing mt="lg" mb="lg" pl="sm" centre={true}>
        <Swiper {...swiperProps} />
      </Spacing>
    </Layout>
  )
}

export default Meeting

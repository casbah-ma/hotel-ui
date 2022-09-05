// components
import Hero from '@/components/Heros/Hero'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import Button from '@/components/Button'
import ImportantInfo from '@/components/ImportantInfo'
import Layout from '@/components/Layout'
import Contacts from '@/components/Contacts'

const image =
  'https://images.unsplash.com/photo-1596436891234-ab1fbd9353e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

const Restaurant = function ({
  layoutProps,
  actionProps,
  importantInfoProps,
  blogProps,
  swiperProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero
        subtitle="Watch anywhere. Cancel anytime."
        title="Restaurant"
        image={image}
      >
        <Button {...actionProps} />
      </Hero>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <Spacing pl="sm" centre={true}>
        <Swiper {...swiperProps} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <ImportantInfo {...importantInfoProps} />
      </Spacing>
      <Contacts
        email="reservations@palazzoversace.com"
        phone="+61 7 5509 8000"
      />
    </Layout>
  )
}

export default Restaurant

import { Hero, AnimatedHero } from '@/components/Heros'
import Blog from '@/components/Blog'
import Swiper from '@/components/Swipers/Swiper'
import Spacing from '@/components/Spacing'
import BookingBar from '@/src/components/Bookings/BookingBar'
import { useState } from 'react'
import Layout from '@/components/Layout'

const image =
  'https://images.unsplash.com/photo-1596436891234-ab1fbd9353e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

const Home = function ({
  layoutProps,
  SwiperProps,
  BlogProps,
  BlogProps1,
  BlogProps2,
  BlogProps3,
  ImagesSwiperProps,
  AnimatedHeroProps,
}) {
  const [dates, setDates] = useState({ startDate: null, endDate: null })
  const [guestValues, setGuestValues] = useState({
    adults: 1,
    kids: 0,
  })
  // handle dates change
  const onDatesChange = (dates) => {
    setDates(dates)
  }

  // handle guest values change
  const onGuestChange = (type, value) => {
    setGuestValues({ ...guestValues, [type]: value })
  }

  return (
    <Layout {...layoutProps}>
      <Hero
        subtitle="Watch anywhere. Cancel anytime."
        title="Bienvenue"
        image={image}
      >
        <BookingBar
          dates={dates}
          guestValues={guestValues}
          onDatesChange={onDatesChange}
          onGuestChange={onGuestChange}
          buttonProps={{
            disabled: false,
            label: 'Check Availability',
            variant: 'primary',
          }}
          baseUrl="https://Hotel UI-garden-tanger-malabata.hotelrunner.com/"
        />
      </Hero>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...BlogProps} />
      </Spacing>
      <Spacing pl="sm" centre>
        <Swiper {...SwiperProps} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="sm">
        <Blog {...BlogProps1} />
      </Spacing>
      <Spacing pr="sm">
        <Blog {...BlogProps2} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...BlogProps3} />
      </Spacing>
      <AnimatedHero {...AnimatedHeroProps} />
      <Spacing mt="lg" mb="lg" pl="sm" center>
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

export default Home

import PropTypes from 'prop-types'
//componenst
import { Hero, AnimatedHero } from '@/components/Heros'
import Swiper from '@/components/Swiper'
import Spacing from '@/components/Spacing'
import Blog from '@/components/Blog'
import ServicesSection from '@/components/ServicesSection'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import { PlayIcon } from '@heroicons/react/solid'

const Room = function ({
  layoutProps,
  heroProps,
  blogProps,
  servicesProps,
  imagesSwiperProps,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <Spacing mb="lg" pl="sm" pr="lg">
        <ServicesSection {...servicesProps} />
      </Spacing>
      <AnimatedHero
        image="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80"
        title="Feel the vibrancy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <Button variant="horizontal" label="Play" Icon={PlayIcon} />
      </AnimatedHero>

      <Spacing mt="lg" mb="lg" pl="sm" centre={true}>
        <Swiper {...imagesSwiperProps} />
      </Spacing>
    </Layout>
  )
}

Room.propTypes = {
  blogProps: PropTypes.shape(Blog.propTypes),
  servicesProps: PropTypes.shape(ServicesSection.propTypes),
}

export default Room

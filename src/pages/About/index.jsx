import { Hero } from '@/src/components/Heroseros'
import Blog from '@/components/Blog'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'
import ImageParallax from '@/components/ImageParallax'

const About = function ({
  layoutProps,
  heroProps,
  blogProps,
  blogProps1,
  blogProps2,
}) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <ImageParallax src="https://source.unsplash.com/random/?hotel" />
      <Spacing mt="lg" mb="lg" pl="sm">
        <Blog {...blogProps1} />
      </Spacing>
      <Spacing pr="sm" mb="lg">
        <Blog {...blogProps2} />
      </Spacing>
    </Layout>
  )
}

export default About

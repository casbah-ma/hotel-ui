import { Hero } from '@/components/Heros/Hero'
import Blog from '@/components/Blog'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'

const Policies = function ({ layoutProps, heroProps, blogProps, blogProps1 }) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps1} />
      </Spacing>
    </Layout>
  )
}

export default Policies

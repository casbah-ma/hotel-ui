import Layout from '@/components/Layout'
import Hero from '@/components/Heros/Hero'
import Spacing from '@/components/Spacing'
import Blog from '@/components/Blogs/Blog'

const Experiences = ({
  layoutProps,
  heroProps,
  blogProps,
  blogProps1,
  blogProps2,
}) => {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="sm">
        <Blog {...blogProps1} />
      </Spacing>
      <Spacing mb="lg" pr="sm">
        <Blog {...blogProps2} />
      </Spacing>
      <Spacing mb="lg" pl="sm">
        <Blog {...blogProps1} />
      </Spacing>
      <Spacing mb="lg" pr="sm">
        <Blog {...blogProps2} />
      </Spacing>
      <Spacing mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
    </Layout>
  )
}
export default Experiences

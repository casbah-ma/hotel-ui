import Hero from '@/components/Heros/Hero'
import Blog from '@/components/Blogs/Blog'
import Spacing from '@/components/Spacing'
import Layout from '@/components/Layout'
import ImageParallax from '@/components/ImageParallax'

const Article = function ({ layoutProps, heroProps, blogProps, blogProps1 }) {
  return (
    <Layout {...layoutProps}>
      <Hero {...heroProps} />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps} />
      </Spacing>
      <ImageParallax src="https://source.unsplash.com/random/?hotel" />
      <Spacing mt="lg" mb="lg" pl="md" pr="lg">
        <Blog {...blogProps1} />
      </Spacing>
    </Layout>
  )
}

export default Article

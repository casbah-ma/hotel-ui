import { HeroII } from '@/components/Heros'
import Layout from '@/components/Layout'
import Masonry from '@/components/Masonry'
import Spacing from '@/components/Spacing'

const Gallery = function ({ heroProps, masonryProps, layoutProps }) {
  return (
    <Layout {...layoutProps}>
      <HeroII {...heroProps}>
        <Spacing pl="sm" pr="sm">
          <Masonry {...masonryProps} />
        </Spacing>
      </HeroII>
    </Layout>
  )
}
export default Gallery

import Home from '.'
//stories
import * as GalleryStories from '@/components/Gallery/Gallery.stories'
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'
import * as AnimatedHero from '@/components/Heros//AnimatedHero/AnimatedHero.stories'

export default {
  title: 'Pages/Home',
  component: Home,
}

const Template = (args) => <Home {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  GalleryProps: { ...GalleryStories.Default.args },
  BlogProps: { ...BlogStories.ImageAtBottom.args },
  BlogProps1: { ...BlogStories.ImageOnRight.args },
  BlogProps2: { ...BlogStories.ImageOnLeft.args },
  BlogProps3: { ...BlogStories.TwoColumns.args },
  SwiperProps: { ...SwiperStories.CardsSlider.args },
  ImagesSwiperProps: { ...SwiperStories.ImagesSlider.args },
  VerticalSwiperProps: { ...SwiperStories.VerticalCardsSlider.args },
  AnimatedHeroProps: { ...AnimatedHero.Default.args },
}

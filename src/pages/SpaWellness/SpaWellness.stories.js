import SpaWellness from '.'
//stories
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as SpaCategoriesStories from '@/components/SpaCategories/SpaCategories.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'
import * as AnimatedHero from '@/components/Heros/AnimatedHero/AnimatedHero.stories'

export default {
  title: 'Pages/Spa & Wellness',
  component: SpaWellness,
}

const Template = (args) => <SpaWellness {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  actionProps: { ...ButtonStories.Dark.args, label: 'Book your something' },
  spaCategoriesProps: { ...SpaCategoriesStories.Default.args },
  BlogProps: { ...BlogStories.Default.args },
  BlogProps1: { ...BlogStories.ImageOnRight.args },
  BlogProps2: { ...BlogStories.ImageOnLeft.args },
  BlogProps3: { ...BlogStories.TwoColumns.args },
  ImagesSwiperProps: { ...SwiperStories.ImagesSlider.args },
  AnimatedHeroProps: { ...AnimatedHero.Example1.args },
}

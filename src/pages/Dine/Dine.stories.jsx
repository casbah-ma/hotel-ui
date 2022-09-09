import Dine from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.js'
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'
import * as AnimatedHero from '@/components/Heros/AnimatedHero/AnimatedHero.stories'

export default {
  title: 'Pages/Dine',
  component: Dine,
}

const Template = (args) => <Dine {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Version1.args },
  HeroProps: { ...HeroProps.Example1.args, title: 'Dine with us' },
  BlogProps: { ...BlogStories.Default.args },
  BlogProps1: { ...BlogStories.ImageOnRight.args },
  BlogProps2: { ...BlogStories.ImageOnLeft.args },
  ImagesSwiperProps: { ...SwiperStories.ImagesSlider.args },
  AnimatedHeroProps: {
    ...AnimatedHero.Example1.args,
    title: 'The magic of the menu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
}

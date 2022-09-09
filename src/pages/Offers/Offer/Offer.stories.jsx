import Offer from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.js'
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Offers/Offer',
  component: Offer,
}

const Template = (args) => <Offer {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Version1.args },
  heroProps: { ...HeroProps.Example1.args, title: 'Glowing skin' },
  blogProps: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'What could be more elegant than a beautiful',
    },
    text: 'Regenerated, toned and radiant skin for summer? During this holiday season, the Spa Hotel UI offers a selection of exceptional treatments to help your skin welcome the first rays of the sun!',
  },
  blogProps1: {
    ...BlogStories.ImageOnRight.args,
    title: {
      ...BlogStories.ImageOnRight.args.title,
      title: 'A unique way to discover the Moroccan culture',
    },
    text: 'The spa’s fitness centre will reinforce your physique and muscle tone. At your own pace, with or without a coach, gently or intensely, you can use the sporting equipment, during a yoga class or swim in the majestic heated covered swimming pool with its orangery style canopy.',
    actionProps: { ...ButtonStories.Dark.args },
  },
  imagesSwiperProps: {
    ...SwiperStories.ImagesSlider.args,
    header: {
      ...SwiperStories.ImagesSlider.args.header,
      title: 'Feel the vibrancy',
    },
  },
}

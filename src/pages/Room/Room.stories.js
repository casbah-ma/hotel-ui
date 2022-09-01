//components
import Room from '.'
//stories
import * as BlogStories from '@/components/Blog/Blog.stories'
import * as ServicesSectionStories from '@/components/ServicesSection/ServicesSection.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as HeroStories from '@/components/Heros/Hero/Hero.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Room',
  component: Room,
}

const Template = (args) => <Room {...args} />

export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: { ...HeroStories.Example1.args, title: 'Room' },
  blogProps: { ...BlogStories.TwoColumns.args },
  servicesProps: { ...ServicesSectionStories.Default.args },
  imagesSwiperProps: { ...SwiperStories.ImagesSlider.args },
}

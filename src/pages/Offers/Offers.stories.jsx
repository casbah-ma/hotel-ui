import Offers from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories'
import * as CardsSwiperProps from '@/components/Swiper/Swiper.stories'
import * as BlogProps from '@/components/Blog/Blog.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Offers',
  component: Offers,
}

const Template = (args) => <Offers {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: { ...HeroProps.Default.args, title: 'Offers' },
  blogProps: {
    ...BlogProps.Default.args,
    title: {
      ...BlogProps.Default.args.title,
      title: 'Additional Facilities',
    },
    text: 'Experience the Palazzo Versace way of relaxing during your stay in Dubai with our additional luxury services and facilities: swimming classes, three outdoor pools, state of the art gym, kids club and more.',
  },
  CardsSwiperProps: { ...CardsSwiperProps.CardsSlider.args },
  ContactsProps: {
    email: 'reservations@palazzoversace.com',
    phone: '+61 7 5509 8000',
  },
}

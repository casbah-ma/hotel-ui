import Experience from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.jsx'
import * as BlogStories from '@/components/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swiper/Swiper.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'
import * as AnimatedHero from '@/components/Heros/AnimatedHero/AnimatedHero.stories'

export default {
  title: 'Pages/Experiences/Experience',
  component: Experience,
}

const Template = (args) => <Experience {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: {
    ...HeroProps.Default.args,
    title: 'Experience',
  },
  blogProps: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'where gentleness and well-being reign',
    },
    text: 'Designed as a sanctuary completely devoted to your senses, the Hotel UI Marrakech Spa creates an intimate universe with a separate entrance to the rest of the hotel. Enter via the citrus garden, where the colours and fragrances will already enchant you. For a break from life, 2500 sqm divided over 3 floors offer an infinite range of treatments.',
  },
  blogProps1: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'What could be more elegant than a beautiful',
    },
    text: 'Regenerated, toned and radiant skin for summer? During this holiday season, the Spa Hotel UI offers a selection of exceptional treatments to help your skin welcome the first rays of the sun!',
  },
  ImagesSwiperProps: { ...SwiperStories.ImagesSlider.args },
  AnimatedHeroProps: { ...AnimatedHero.Example1.args },
}

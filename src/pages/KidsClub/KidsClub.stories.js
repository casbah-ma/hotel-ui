import Activities from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.js'
import * as BlogStories from '@/components/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'
import * as AnimatedHero from '@/components/Heros/AnimatedHero/AnimatedHero.stories'

export default {
  title: 'Pages/Kids Club & Activities',
  component: Activities,
}

const Template = (args) => <Activities {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: { ...HeroProps.Example1.args, title: 'Kids club & activities' },
  blogProps: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'Creating the happiest family holiday memories',
    },
    text: 'Our little guests are full of excitement when they discover the kids’ club of the Hotel UI Marrakech in the lush setting near the garden and pool. Just a few steps further and the door to Le Jardin de Lila opens, revealing a world of colour in which imagination reigns and children are royalty: a universe created just for them!',
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
  blogProps2: {
    ...BlogStories.ImageOnLeft.args,
    title: {
      ...BlogStories.ImageOnLeft.args.title,
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
  AnimatedHeroProps: {
    ...AnimatedHero.Example1.args,
    title: 'Kids’ club: once upon a time in Le Jardin de Lila…',
    description:
      'At the Hotel UI, we foster family happiness. Le Jardin de Lila is a space dedicated to kids between the age of 4 and 10. Shared activities, exquisite treats, personal attention, story-telling and lots of laughter: we’ve thought of everything to entertain the children and keep the parents happy.',
  },
}

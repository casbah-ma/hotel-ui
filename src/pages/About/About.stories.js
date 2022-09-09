import About from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.js'
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/About The Hotel',
  component: About,
}

const Template = (args) => <About {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Version1.args },
  heroProps: { ...HeroProps.Example1.args, title: 'About The Hotel' },
  blogProps: {
    ...BlogStories.ThreeColumns.args,
    title: { ...BlogStories.ThreeColumns.args.title, title: 'Our Story' },
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
}

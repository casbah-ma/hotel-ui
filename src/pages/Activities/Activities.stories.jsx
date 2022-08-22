import Activities from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.jsx'
import * as BlogStories from '@/components/Blog/Blog.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Activities',
  component: Activities,
}

const Template = (args) => <Activities {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: { ...HeroProps.Default.args, title: 'Activities' },
  blogProps: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'What could be more elegant than a beautiful',
    },
    text: 'Regenerated, toned and radiant skin for summer? During this holiday season, the Spa Royal Mansour offers a selection of exceptional treatments to help your skin welcome the first rays of the sun!',
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
      title: 'The Hammam: the quintessence of well-being',
    },
    text: 'As the true signature treatment of the Royal Mansour Spa, the hammam plunges you in an immersive traditional Moroccan experience. Steam, beauty rituals, gentle exfoliation, ceremonial massage, ghassoul wrap and floral water sprays will take you away into a complete state of beautification.',
    actionProps: { ...ButtonStories.Dark.args },
  },
}

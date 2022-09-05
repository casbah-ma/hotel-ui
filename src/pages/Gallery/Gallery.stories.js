import Gallery from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.js'
import * as MasonryProps from '@/components/Masonries/Masonry/Masonry.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Gallery',
  component: Gallery,
}

const Template = (args) => <Gallery {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: { ...HeroProps.Example1.args, title: 'Gallery' },
  masonryProps: { ...MasonryProps.Default.args },
}

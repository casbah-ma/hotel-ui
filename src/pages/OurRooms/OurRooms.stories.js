//components
import OurRooms from '.'
//stories
import * as CategoriesSectionStories from '@/components/CategoriesCardsSection/CategoriesCardsSection.stories'
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as ServicesSectionStories from '@/components/ServicesSection/ServicesSection.stories'
import * as HeroProps from '@/components/Heros/Hero/Hero.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Rooms&Suites',
  component: OurRooms,
}

const Template = (args) => <OurRooms {...args} />

export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Version1.args },
  heroProps: { ...HeroProps.Example1.args, title: 'Rooms & Suites' },
  blogProps: { ...BlogStories.ThreeColumns.args },
  categoriesCardsProps: { ...CategoriesSectionStories.Default.args },
  servicesProps: { ...ServicesSectionStories.Default.args },
}

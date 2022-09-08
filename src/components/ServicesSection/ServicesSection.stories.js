import ServicesSection from '.'
//stories
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as ServicesGridStories from '@/components/ServicesGrid/ServicesGrid.stories'
import * as TitleStories from '@/components/Title/Title.stories'

export default {
  title: 'Sections/Services',
  component: ServicesSection,
}

const Template = (args) => <ServicesSection {...args} />

export const Default = Template.bind({})
Default.args = {
  blogProps: {
    ...BlogStories.Default.args,
    title: { ...TitleStories.H2, title: 'Included Services' },
  },
  services: ServicesGridStories.Default.args.services,
}

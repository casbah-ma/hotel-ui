import ServicesSection from '.'
//stories
import * as BlogStories from '@/components/Blog/Blog.stories'
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
    text: "A signature bedding imagined and designed exclusively for Dixil. The bed frames and mattresses are filled with sustainably sourced materials and guarantee an unrivaled comfort for Dixil's guests.",
  },
  services: ServicesGridStories.Default.args.services,
}

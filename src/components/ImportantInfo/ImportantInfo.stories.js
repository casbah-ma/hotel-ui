import ImportantInfo from '.'
//stories
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as AccordionStories from '@/components/Accordion/Accordion.stories'

export default {
  title: 'Sections/ImportantInfo',
  component: ImportantInfo,
}

const Template = (args) => <ImportantInfo {...args} />

export const Default = Template.bind({})
Default.args = {
  blogProps: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'Important Information',
    },
    text: "A signature bedding imagined and designed exclusively for Hotel UI. The bed frames and mattresses are filled with sustainably sourced materials and guarantee an unrivaled comfort for Hotel UI's guests.",
  },
  accordionProps: { ...AccordionStories.Default.args },
}

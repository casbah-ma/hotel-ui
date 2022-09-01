import Accordion from '.'
import * as AccordionItemStories from './AccordionItem/AccordionItem.stories'

const items = [
  { ...AccordionItemStories.Closed.args.item },
  {
    ...AccordionItemStories.Closed.args.item,
    id: '2',
    name: 'Rainfall Shower',
  },
  { ...AccordionItemStories.Closed.args.item, id: '3', name: '24 Hour Gym' },
  { ...AccordionItemStories.Closed.args.item, id: '4', name: 'Yoga Mat' },
  {
    ...AccordionItemStories.Closed.args.item,
    id: '5',
    name: 'Flexible Check-out Time',
  },
  { ...AccordionItemStories.Closed.args.item, id: '6', name: 'Pet Friendly' },
]

export default {
  title: 'sections/Accordion',
  component: Accordion,
}

const Template = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {
  items,
  variant: 'version1',
}

export const V2 = Template.bind({})
V2.args = {
  items,
  variant: 'version2',
}

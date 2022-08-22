import AccordionItem from '.'
import Paragraph from '@/components/Paragraph'

export default {
  title: 'Components/AccordionItem',
  component: AccordionItem,
}

const Template = (args) => (
  <AccordionItem {...args}>
    <Paragraph description={args.item.content} />
  </AccordionItem>
)

export const Closed = Template.bind({})
Closed.args = {
  item: {
    id: '1',
    name: 'Free Wifi',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  isOpened: '',
}

export const Opened = Template.bind({})
Opened.args = {
  item: {
    ...Closed.args.item,
  },
  isOpened: '1',
}

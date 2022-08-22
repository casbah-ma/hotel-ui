import CategoriesGrid from '.'
import * as CardsStories from '@/components/Cards/Card/Card.stories'

export default {
  title: 'Components/CategoriesGrid',
  component: CategoriesGrid,
}
const cards = [
  { ...CardsStories.LinkCard.args, id: '1' },
  { ...CardsStories.LinkCard.args, id: '2' },
  { ...CardsStories.LinkCard.args, id: '3' },
  { ...CardsStories.LinkCard.args, id: '4' },
]
const Template = (args) => <CategoriesGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  cards,
}

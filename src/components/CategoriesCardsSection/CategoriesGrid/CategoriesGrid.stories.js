import CategoriesGrid from '.'
import * as CardsStories from '@/components/Cards/Card/Card.stories'

export default {
  title: 'Components/CategoriesGrid',
  component: CategoriesGrid,
}
const cards = [
  { ...CardsStories.Small.args, id: '1' },
  { ...CardsStories.Small.args, id: '2' },
  { ...CardsStories.Small.args, id: '3' },
  { ...CardsStories.Small.args, id: '4' },
]
const Template = (args) => <CategoriesGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  cards,
}

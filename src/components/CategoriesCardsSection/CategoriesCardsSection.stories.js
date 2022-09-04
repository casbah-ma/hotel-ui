import CategoriesCardsSection from '.'
//stories
import * as HeaderStories from '@/components/Header/Header.stories'
import * as CategoriesGridStories from './CategoriesGrid/CategoriesGrid.stories'

export default {
  title: 'Sections/CategoriesCards',
  component: CategoriesCardsSection,
}

const Template = (args) => <CategoriesCardsSection {...args} />

export const Default = Template.bind({})
Default.args = {
  headerProps: HeaderStories.Default.args,
  cards: CategoriesGridStories.Default.args.cards,
}

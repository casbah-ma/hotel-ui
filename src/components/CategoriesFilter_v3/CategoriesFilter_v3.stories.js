import CategoriesFilter_v3 from '.'
// Stories
import * as RoomCardStories from '@/components/Cards/RoomCard/RoomCard.stories'
import * as InfoItemsStories from '@/components/InfoItems/InfoItems.stories'
import * as HeaderStories from '@/components/Header/Header.stories'
//data
import data from './data'

export default {
  title: 'Sections/CategoriesFilter_v3',
  component: CategoriesFilter_v3,
}

//stories
const Template = (args) => <CategoriesFilter_v3 {...args} />

export const Default = Template.bind({})
Default.args = {
  headerProps: HeaderStories.WithoutBorder.args,
  categories: data,
}

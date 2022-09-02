import MeetingCategories from '.'
// Stories
import * as RoomCardStories from '@/components/Cards/RoomCard/RoomCard.stories'
import * as BarStories from '@/components/FilterBar/FilterBar.stories'
import * as InfoItemsStories from '@/components/InfoItems/InfoItems.stories'
import * as HeaderStories from '@/components/Header/Header.stories'

export default {
  title: 'Sections/MeetingCategories',
  component: MeetingCategories,
}

const categoriesDetails = [
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
]

//stories
const Template = (args) => <MeetingCategories {...args} />

export const Default = Template.bind({})
Default.args = {
  categoriesDetails,
  headerProps: HeaderStories.Default.args,
  categories: BarStories.V1.args.categories,
}

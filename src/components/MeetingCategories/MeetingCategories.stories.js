import MeetingCategories from '.'
// Stories
import * as RoomCardStories from '@/components/Cards/RoomCard/RoomCard.stories'
import * as BarStories from '@/components/FilterBar/FilterBar.stories'
import * as InfoItemsStories from '@/components/InfoItems/InfoItems.stories'

export default {
  title: 'Sections/MeetingCategories',
  component: MeetingCategories,
}

//Props
const headerProps = {
  title: 'Choose your type',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
}

const categoriesDetails = [
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args.headerProps },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args.headerProps },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args.headerProps },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args.headerProps },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args.headerProps },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
  {
    roomCard: { ...RoomCardStories.WithInfoItems.args.headerProps },
    infoDeatails: InfoItemsStories.Default.args.infos,
  },
]

//stories
const Template = (args) => <MeetingCategories {...args} />

export const Default = Template.bind({})
Default.args = {
  categoriesDetails,
  headerProps,
  categories: BarStories.V1.args.categories,
}

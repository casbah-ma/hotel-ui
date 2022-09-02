import CategoriesSwiper from '.'
import * as RoomCardStories from '@/components/Cards/RoomCard/RoomCard.stories'
import * as BarStories from '@/src/components/FilterBar/FilterBar.stories'

export default {
  title: 'Sections/SpaCategories',
  component: CategoriesSwiper,
}

//Props
const headerProps = {
  title: 'Choose your type',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
}

const paragraphProps = {
  description:
    'The Spa Hotel UI is the place dedicated to the world of well-being in all its excellence; thus, it offers the best skincare brands designed to meet the specific needs of each and every one. Get ready to be swept',
  fontSize: 'sm',
}

const categoriesDetails = [
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
]

//stories
const Template = (args) => <CategoriesSwiper {...args} />

export const Default = Template.bind({})
Default.args = {
  categoriesDetails,
  headerProps,
  barProps: BarStories.Default.args,
}

import MeetingCategories_v2 from '.'
// Stories
import * as HeaderStories from '@/components/Header/Header.stories'
//data
import data from './data'

export default {
  title: 'Sections/CategoriesFilters/MeetingCategories_v2',
  component: MeetingCategories_v2,
}

//stories
const Template = (args) => <MeetingCategories_v2 {...args} />

export const Default = Template.bind({})
Default.args = {
  headerProps: HeaderStories.WithoutBorder.args,
  categories: data,
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

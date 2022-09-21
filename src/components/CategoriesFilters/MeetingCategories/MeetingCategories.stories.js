import MeetingCategories from '.'
// Stories
import * as HeaderStories from '@/components/Header/Header.stories'
import data from './data'

export default {
  title: 'Sections/CategoriesFilters/MeetingCategories',
  component: MeetingCategories,
}

//stories
const Template = (args) => <MeetingCategories {...args} />

export const Default = Template.bind({})
Default.args = {
  headerProps: HeaderStories.Default.args,
  categories: data,
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

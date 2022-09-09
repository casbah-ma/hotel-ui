import CategoriesFilter_v2 from '.'
// Stories
import * as ButtonStories from '@/components/Button/Button.stories'
import * as HeaderStories from '@/components/Header/Header.stories'
//data
import data from './data'

export default {
  title: 'Sections/CategoriesFilters/CategoriesFilter_v2',
  component: CategoriesFilter_v2,
}

//stories
const Template = (args) => <CategoriesFilter_v2 {...args} />

export const Default = Template.bind({})
Default.args = {
  headerProps: HeaderStories.WithoutBorder.args,
  actionProps: ButtonStories.Secondary.args,
  categories: data,
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

import CategoriesFilterSpa_V3 from '.'
// Stories
import * as ButtonStories from '@/components/Button/Button.stories'
import * as HeaderStories from '@/components/Header/Header.stories'
//data
import data from './data'

export default {
  title: 'Sections/CategoriesFilters/CategoriesFilterSpa_V3',
  component: CategoriesFilterSpa_V3,
}

//stories
const Template = (args) => <CategoriesFilterSpa_V3 {...args} />

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

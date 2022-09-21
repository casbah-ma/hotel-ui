import CategoriesSwiper from '.'
import categories from './data'
import * as ButtonStories from '@/components/Button/Button.stories'
export default {
  title: 'Sections/CategoriesFilters/SpaCategories',
  component: CategoriesSwiper,
}

//Props
const headerProps = {
  title: 'Choose your type',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
}

//stories
const Template = (args) => <CategoriesSwiper {...args} />

export const Default = Template.bind({})
Default.args = {
  categories,
  headerProps,
  actionProps: ButtonStories.Primary.args,
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

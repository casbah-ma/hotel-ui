import CategoriesSwiper from '.'
import categories from './data'
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

//stories
const Template = (args) => <CategoriesSwiper {...args} />

export const Default = Template.bind({})
Default.args = {
  categories,
  headerProps,
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

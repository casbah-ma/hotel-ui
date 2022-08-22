import CategoriesBar from '.'

export default {
  title: 'Components/CategoriesSwiper/CategoriesBar',
  component: CategoriesBar,
}

const Template = (args) => <CategoriesBar {...args} />

export const Default = Template.bind({})
Default.args = {
  categories: ['Theatre', 'School Room', 'Reception', 'Banquet', 'U-Shape'],
}

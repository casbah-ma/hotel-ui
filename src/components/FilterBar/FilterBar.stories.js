import FilterBar from '.'
import { variants } from './FilterBar.styles'

export default {
  title: 'Components/CategoriesSwiper/FilterBar',
  component: FilterBar,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <FilterBar {...args} />

export const V1 = Template.bind({})
V1.args = {
  categories: ['Theatre', 'School Room', 'Reception', 'Banquet', 'U-Shape'],
}

export const V2 = Template.bind({})
V2.args = {
  categories: ['Theatre', 'School Room', 'Reception', 'Banquet', 'U-Shape'],
  variant: 'v2',
}

export const V3 = Template.bind({})
V3.args = {
  categories: ['Theatre', 'School Room', 'Reception', 'Banquet', 'U-Shape'],
  variant: 'v3',
}

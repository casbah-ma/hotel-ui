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
  categories: [
    { type: 'Theatre', quantity: '3' },
    { type: 'School Room', quantity: '3' },
    { type: 'Reception', quantity: '2' },
    { type: 'U-Shape', quantity: '2' },
    { type: 'Banquet', quantity: '3' },
  ],
}

export const V2 = Template.bind({})
V2.args = {
  ...V1.args,
  variant: 'v2',
}

export const V3 = Template.bind({})
V3.args = {
  ...V1.args,
  variant: 'v3',
}

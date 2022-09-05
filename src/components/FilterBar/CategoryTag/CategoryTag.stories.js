import CategoryTag from '.'
import { variants } from './CategoryTag.styles'

export default {
  title: 'Components/CategoriesSwiper/CategoryTag',
  component: CategoryTag,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <CategoryTag {...args} />

export const V1 = Template.bind({})
V1.args = {
  categoryName: 'Theatre',
  active: '',
  variant: 'v1',
}
export const ActiveV1 = Template.bind({})
ActiveV1.args = {
  ...V1.args,
  active: 'Theatre',
}

export const V2 = Template.bind({})
V2.args = {
  ...V1.args,
  variant: 'v2',
}

export const ActiveV2 = Template.bind({})
ActiveV2.args = {
  ...V2.args,
  active: 'Theatre',
}

export const V3 = Template.bind({})
V3.args = {
  ...V1.args,
  variant: 'v3',
}

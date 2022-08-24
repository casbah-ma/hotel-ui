import { colors, titleLeveles } from '@/styles/theming'
import Title from '.'

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    level: {
      options: Object.keys(titleLeveles),
      control: { type: 'radio' },
    },
    color: {
      options: Object.keys(colors),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Title {...args} />

export const H1 = Template.bind({})
H1.args = {
  title: 'Experience it all... vividly at Hotel UI Tangier!',
  level: '1',
  color: 'primary',
}

export const H2 = Template.bind({})
H2.args = {
  ...H1.args,
  level: '2',
}

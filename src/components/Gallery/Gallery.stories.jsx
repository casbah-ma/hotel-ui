import Gallery from '.'
import { images } from './Helper'

export default {
  title: 'Sections/Gallery',
  component: Gallery,
}

const Template = (args) => <Gallery {...args} />

export const Default = Template.bind({})
Default.args = {
  headerProps: {
    title: 'We on Instagram',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  images,
  variant: 'threeColumns',
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  images,
  variant: 'twoColumns',
}

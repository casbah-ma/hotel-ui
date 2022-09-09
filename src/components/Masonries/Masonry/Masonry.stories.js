import Masonry from '.'
import { images } from './data'

export default {
  title: 'Sections/Masonries/Masonry',
  component: Masonry,
}

const Template = (args) => <Masonry {...args} />

export const Default = Template.bind({})

Default.args = {
  images,
}

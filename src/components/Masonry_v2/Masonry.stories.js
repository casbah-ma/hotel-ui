import Masonry_v2 from '.'
import { images } from './data'

export default {
  title: 'Sections/Masonry_v2',
  component: Masonry_v2,
}

const Template = (args) => <Masonry_v2 {...args} />
export const Default = Template.bind({})
Default.args = {
  images,
}

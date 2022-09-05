import Masonry from '.'
import { images } from './data'
import * as BarStories from '@/components/FilterBar/FilterBar.stories'

export default {
  title: 'Sections/Masonries/Masonry',
  component: Masonry,
}

const Template = (args) => <Masonry {...args} />

export const Default = Template.bind({})

Default.args = {
  images,
  barProps: { ...BarStories.V1.args },
}

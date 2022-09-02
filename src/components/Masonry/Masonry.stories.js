import Masonry from '.'
import { images } from './data'
import * as BarStories from '@/src/components/FilterBar/FilterBar.stories'

export default {
  title: 'Sections/Masonry',
  component: Masonry,
}

const Template = (args) => <Masonry {...args} />

export const Default = Template.bind({})

Default.args = {
  images,
  barProps: { ...BarStories.Default.args },
}

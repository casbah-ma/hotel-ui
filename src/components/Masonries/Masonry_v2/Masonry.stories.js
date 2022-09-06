import Masonry_v2 from '.'
import { images } from './data'
import * as HeaderProps from '@/components/Header/Header.stories'
import * as barProps from '@/components/FilterBar/FilterBar.stories'

export default {
  title: 'Sections/Masonries/Masonry_v2',
  component: Masonry_v2,
}

const Template = (args) => <Masonry_v2 {...args} />
export const Default = Template.bind({})
Default.args = {
  images,
  headerProps: { ...HeaderProps.WithoutBorder.args },
  barProps: { ...barProps.V2.args },
}

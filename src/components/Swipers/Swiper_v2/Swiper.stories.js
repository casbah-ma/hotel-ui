import Swiper_v2 from '.'
import * as HedaerStories from '@/components/Header/Header.stories'

export default {
  title: 'V2/Components/Swipers/Swiper_v2',
  component: Swiper_v2,
}

const Template = (args) => <Swiper_v2 {...args} />
export const Default = Template.bind({})
Default.args = {
  navigation: true,
  header: { ...HedaerStories.Normal.args },
}

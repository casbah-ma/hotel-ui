//components
import RoomCard_v3 from '.'
import InfoItems from '@/components/InfoItems'
import Paragraph from '@/components/Paragraph'
//stories
import * as InfoItemStories from '@/components/InfoItems/InfoItems.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as InfoHeaderStories from '@/components/InfoHeader/InfoHeader.stories'
import * as ParagraphStories from '@/components/Paragraph/Paragraph.stories'

export default {
  title: 'Components/Cards/RoomCard_v3',
  component: RoomCard_v3,
}

const Template = (args) => (
  <RoomCard_v3 {...args}>
    <InfoItems {...InfoItemStories.Default.args} space={false} />
  </RoomCard_v3>
)
const Template2 = (args) => (
  <RoomCard_v3 {...args}>
    <Paragraph {...ParagraphStories.Regular.args} />
  </RoomCard_v3>
)

export const WithInfoItems = Template.bind({})
WithInfoItems.args = {
  name: 'Room 1',
  src: 'https://source.unsplash.com/random/?hotel',
  subtitle: '13M X 7M',
}

export const WithFreeText = Template2.bind({})
WithFreeText.args = {
  headerProps: { ...InfoHeaderStories.Default.args },
  actionProps: { ...ButtonStories.Dark.args },
}

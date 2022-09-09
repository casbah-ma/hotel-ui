//components
import RoomCard from '.'
import InfoItems from '@/components/InfoItems'
import Paragraph from '@/components/Paragraph'
//stories
import * as InfoItemStories from '@/components/InfoItems/InfoItems.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as ParagraphStories from '@/components/Paragraph/Paragraph.stories'

export default {
  title: 'Components/Cards/RoomCard',
  component: RoomCard,
}

const Template = (args) => (
  <RoomCard {...args}>
    <InfoItems {...InfoItemStories.Default.args} />
  </RoomCard>
)
const Template2 = (args) => (
  <RoomCard {...args}>
    <Paragraph {...ParagraphStories.Regular.args} />
  </RoomCard>
)

export const WithInfoItems = Template.bind({})
WithInfoItems.args = {
  title: 'Room 1',
  subtitle: '13M X 7M',
  image: {
    variant: 'small',
    src: 'https://source.unsplash.com/random/?hotel',
  },
  variant: 'v1',
  link: {
    href: '/',
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}
export const WithInfoItems_V2 = Template.bind({})
WithInfoItems_V2.args = {
  ...WithInfoItems.args,
  image: {
    variant: 'smallHorizontal',
    src: 'https://source.unsplash.com/random/?hotel',
  },
  variant: 'v2',
}

export const WithFreeText = Template2.bind({})
WithFreeText.args = {
  title: 'Room 1',
  subtitle: '13M X 7M',
  actionProps: { ...ButtonStories.Dark.args },
  variant: 'v1',
  link: {
    href: '/',
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

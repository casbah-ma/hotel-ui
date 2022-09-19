//components
import RoomCard_v3 from '.'
import InfoItems from '@/components/InfoItems'
import Paragraph from '@/components/Paragraph'
//stories
import * as InfoItemStories from '@/components/InfoItems/InfoItems.stories'
import * as ButtonStories from '@/components/Button/Button.stories'

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
    <Paragraph
      fontSize="sm"
      description="The Spa is the place dedicated to the world of well-being in all its excellence; thus, it offers the best skincare brands designed to meet the specific needs of each and every one. Get ready to be swept"
    />
  </RoomCard_v3>
)

export const WithImage = Template.bind({})
WithImage.args = {
  name: 'Room 1',
  imageSrc: 'https://source.unsplash.com/random/?hotel',
  subtitle: '13M X 7M',
  href: '/',
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

export const WithFreeText = Template2.bind({})
WithFreeText.args = {
  ...WithImage.args,
  imageSrc: null,
  actionProps: { ...ButtonStories.Secondary.args },
}

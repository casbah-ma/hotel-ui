//components
import RoomCard_v2 from '.'
//stories
import * as ButtonStories from '@/components/Button/Button.stories'

export default {
  title: 'Components/Cards/RoomCard_v2',
  component: RoomCard_v2,
}

const Template = (args) => <RoomCard_v2 {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Room 1',
  subtitle: '13M X 7M',
  actionProps: { ...ButtonStories.Secondary.args },
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi fermentum quis dictumst morbi aliquet pellentesque sit lectus. Imperdiet nec risus est lorem feugiat. Mauris aliquam tempor adipiscing tellus urna, eleifend tellus commodo morbi.',
  href: '/',
  link: {
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

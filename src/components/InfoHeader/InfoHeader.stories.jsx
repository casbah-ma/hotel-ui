import InfoHeader from '.'
import * as ImagesStories from '@/components/Cards/ImageCard/ImageCard.stories'

export default {
  title: 'Components/CategoriesSwiper/InfoHeader',
  component: InfoHeader,
}

const Template = (args) => <InfoHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Room 1',
  subtitle: '13M X 7M',
}

export const WithImage = Template.bind({})
WithImage.args = {
  ...Default.args,
  roomImage: { ...ImagesStories.Small.args },
}

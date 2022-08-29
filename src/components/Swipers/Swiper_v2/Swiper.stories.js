import Swiper_v2 from '.'
import { SwiperSlide } from 'swiper/react'
import * as HedaerStories from '@/components/Header/Header.stories'
import { Cards, Images } from './FakeData'
import Card_v2 from '../../Cards/Card_v2'
import { ImageCard } from '../../Cards'

export default {
  title: 'Sections/Swipers/Swiper_v2',
  component: Swiper_v2,
}

const Template = (args) => <Swiper_v2 {...args} />
export const CardsExample = Template.bind({})
export const ImagesExample = Template.bind({})

// Cards swiper
CardsExample.args = {
  navigation: true,
  header: { ...HedaerStories.Normal.args },
  children: Cards.map((card, index) => (
    <SwiperSlide key={index}>
      <Card_v2 {...card} />
    </SwiperSlide>
  )),
}

// Images swiper
ImagesExample.args = {
  navigation: true,
  header: { ...HedaerStories.Normal.args },
  children: Images.map((image, index) => (
    <SwiperSlide key={index}>
      <ImageCard {...image} />
    </SwiperSlide>
  )),
}

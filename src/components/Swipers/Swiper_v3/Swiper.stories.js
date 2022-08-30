import Swiper_v3 from '.'
import { SwiperSlide } from 'swiper/react'
import * as HedaerStories from '@/components/Header/Header.stories'
import { cards, images } from './FakeData'
import Card_v2 from '@/components/Cards/Card_v2'
import { ImageCard } from '@/components/Cards'

export default {
  title: 'Sections/Swipers/Swiper_v3',
  component: Swiper_v3,
}

const Template = (args) => <Swiper_v3 {...args} />
export const CardsExample = Template.bind({})
export const ImagesExample = Template.bind({})

// Images swiper
ImagesExample.args = {
  autoplay: true,
  header: { ...HedaerStories.WithoutBorder.args, title: 'Feel the vibrancy' },
  children: images.map((image, index) => (
    <SwiperSlide key={index}>
      <ImageCard {...image} variant="shape6" />
    </SwiperSlide>
  )),
}

// Cards swiper
CardsExample.args = {
  ...ImagesExample.args,
  children: cards.map((card, index) => (
    <SwiperSlide key={index}>
      <Card_v2 {...card} />
    </SwiperSlide>
  )),
}

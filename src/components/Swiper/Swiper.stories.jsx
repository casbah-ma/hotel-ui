import Swiper from '.'
import * as HedaerStories from '@/components/Header/Header.stories'
import Paragraph from '@/components/Paragraph'
import RoomCard from '@/components/Cards/RoomCard'
import { SwiperSlide } from 'swiper/react'
import { isEmpty } from '@/helpers/utils'
import { ImageCard, Card } from '@/components/Cards'
import {
  Carddata,
  VerticalCardesdata,
  Imagesdata,
  categoriesDetails,
} from './FakeData'

export default {
  title: 'Sections/Swiper',
  component: Swiper,
}

const Template = (args) => <Swiper {...args} />

export const CardsSlider = Template.bind({})
export const VerticalCardsSlider = Template.bind({})
export const ImagesSlider = Template.bind({})
export const RoomCards = Template.bind({})
//cardsSlider-w1-w
CardsSlider.args = {
  type: 'card',
  header: { ...HedaerStories.Normal.args },
  children:
    !isEmpty(Carddata) &&
    Carddata.map((card, index) => (
      <SwiperSlide key={index}>
        <Card {...card} />
      </SwiperSlide>
    )),
}

// Vertical Cards Slider - w1-w
VerticalCardsSlider.args = {
  ...CardsSlider.args,
  children:
    !isEmpty(VerticalCardesdata) &&
    VerticalCardesdata.map((card, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center">
        <Card {...card} />
      </SwiperSlide>
    )),
}

//imagesSlider-w1-w
ImagesSlider.args = {
  type: 'card',
  header: { ...HedaerStories.Normal.args },
  children:
    !isEmpty(Imagesdata) &&
    Imagesdata.map((image, index) => (
      <SwiperSlide
        key={index}
        className={`${
          index % 3 === 0 && 'lg:w-[25rem]'
        } flex justify-center items-center`}
      >
        <ImageCard
          variant={`shape${(index % 3) + 1}`}
          src={image.src}
          alt={image}
        />
      </SwiperSlide>
    )),
}

//roomCards-w1-w
RoomCards.args = {
  type: 'card',
  header: { ...HedaerStories.Normal.args },
  children: categoriesDetails.map((item, index) => {
    return (
      <SwiperSlide key={index} className="md:w-[25rem]">
        <RoomCard {...item.roomCard}>
          <Paragraph {...item.paragraph} />
        </RoomCard>
      </SwiperSlide>
    )
  }),
}

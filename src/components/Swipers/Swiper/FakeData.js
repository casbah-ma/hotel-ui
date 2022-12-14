import * as CardStories from '@/components/Cards/Card/Card.stories'
import * as RoomCardStories from '@/components/Cards/RoomCard/RoomCard.stories'

export const paragraphProps = {
  description:
    'The Spa Hotel UI is the place dedicated to the world of well-being in all its excellence; thus, it offers the best skincare brands designed to meet the specific needs of each and every one. Get ready to be swept',
  fontSize: 'sm',
}
export const categoriesDetails = [
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
  {
    roomCard: { ...RoomCardStories.WithFreeText.args },
    paragraph: { ...paragraphProps },
  },
]
export const Carddata = [
  {
    ...CardStories.Small.args,
    image: 'https://source.unsplash.com/random/?hotel',
  },
  {
    ...CardStories.Small.args,
    image: 'https://source.unsplash.com/random/?motel',
  },
  {
    ...CardStories.Small.args,
    image: 'https://source.unsplash.com/random/?Interiors',
  },
  {
    ...CardStories.Small.args,
    image: 'https://source.unsplash.com/random/?Hotel_Room',
  },
  {
    ...CardStories.Small.args,
    image: 'https://source.unsplash.com/random/?B&b',
  },
]

export const Imagesdata = [
  {
    src: 'https://source.unsplash.com/random/?hotel',
  },
  {
    src: 'https://source.unsplash.com/random/?motel',
  },
  {
    src: 'https://source.unsplash.com/random/?Interiors',
  },
  {
    src: 'https://source.unsplash.com/random/?Hotel_Room',
  },
  {
    src: 'https://source.unsplash.com/random/?B&b',
  },
  {
    src: 'https://source.unsplash.com/random/?room',
  },
  {
    src: 'https://source.unsplash.com/random/?Bb',
  },
]

export const VerticalCardesdata = [
  {
    ...CardStories.Small.args,
    direction: 'vertical',
    image: 'https://source.unsplash.com/random/?hotel',
  },
  {
    ...CardStories.Small.args,
    direction: 'vertical',
    image: 'https://source.unsplash.com/random/?motel',
  },
  {
    ...CardStories.Small.args,
    direction: 'vertical',
    image: 'https://source.unsplash.com/random/?Interiors',
  },
  {
    ...CardStories.Small.args,
    direction: 'vertical',
    image: 'https://source.unsplash.com/random/?Hotel_Room',
  },
  {
    ...CardStories.Small.args,
    direction: 'vertical',
    image: 'https://source.unsplash.com/random/?B&b',
  },
]

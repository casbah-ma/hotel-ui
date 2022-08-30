import Restaurant from '.'
//stories
import * as BlogStories from '@/components/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swipers/Swiper/Swiper.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as ImportantInfoStories from '@/components/ImportantInfo/ImportantInfo.stories'
import * as HeaderStories from '@/components/Header/Header.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Restaurant',
  component: Restaurant,
}

const Template = (args) => <Restaurant {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  actionProps: { ...ButtonStories.Dark.args },
  importantInfoProps: { ...ImportantInfoStories.Default.args },
  headerProps: { ...HeaderStories.Contact.args },
  swiperProps: {
    ...SwiperStories.ImagesSlider.args,
    header: {
      ...SwiperStories.ImagesSlider.args.header,
      title: 'Feel the vibrancy',
    },
  },
  blogProps: {
    ...BlogStories.Default.args,
    title: {
      ...BlogStories.Default.args.title,
      title: 'Il Barocco Restaurant',
    },
    text: 'A celebration of fresh, seasonal flavours, Il Barocco Restaurant boasts a bountiful array of the freshest seafood and fish, vibrant salads, succulent roast meats with all the tasty trimmings and decadent sweet treats available for buffet dinner every evening. Il Barocco Restaurant also offers a buffet breakfast, which is available daily and promises to get your day off to a sensational start with a beautiful assortment of baked goods and free-flowing coffee.',
  },
}

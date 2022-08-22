import Meeting from '.'
//stories
import * as BlogStories from '@/components/Blog/Blog.stories'
import * as SwiperStories from '@/components/Swiper/Swiper.stories'
import * as ButtonStories from '@/components/Button/Button.stories'
import * as MeetingCategoriesStories from '@/components/MeetingCategories/MeetingCategories.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Meeting',
  component: Meeting,
}

const Template = (args) => <Meeting {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  actionProps: { ...ButtonStories.Dark.args, label: 'Book your Meeting' },
  meetingCategoriesProps: { ...MeetingCategoriesStories.Default.args },
  blogProps: {
    ...BlogStories.ThreeColumns.args,
    title: { ...BlogStories.ThreeColumns.args.title, title: 'Meet' },
    actionProps: { ...ButtonStories.Dark.args },
  },
  swiperProps: { ...SwiperStories.CardsSlider.args },
}

import ContactUs from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.jsx'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/ContactUs',
  component: ContactUs,
}

const Template = (args) => <ContactUs {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Default.args },
  heroProps: { ...HeroProps.Default.args, title: 'Contact Us' },
  ContactsProps: {
    email: 'reservations@palazzoversace.com',
    phone: '+61 7 5509 8000',
  },
  MapProps: {
    long: -5.796029414390299,
    lat: 35.775781158640214,
  },
}

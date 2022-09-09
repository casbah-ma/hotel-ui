import Article from '.'
//stories
import * as HeroProps from '@/components/Heros/Hero/Hero.stories.js'
import * as BlogStories from '@/components/Blogs/Blog/Blog.stories'
import * as LayoutStories from '@/components/Layout/Layout.stories'

export default {
  title: 'Pages/Article ',
  component: Article,
}

const Template = (args) => <Article {...args} />
export const Default = Template.bind({})
Default.args = {
  layoutProps: { ...LayoutStories.Version1.args },
  heroProps: { ...HeroProps.Example1.args, title: 'Can you hear us?' },
  blogProps: {
    ...BlogStories.ThreeColumns.args,
    title: { ...BlogStories.ThreeColumns.args.title, title: 'Our Story' },
  },
  blogProps1: {
    ...BlogStories.Default.args,
    title: { ...BlogStories.Default.args.title, title: 'Never Forget' },
    text: 'Located in an idyllic green scenery right at the foot of Cape Malataba, the Hotel UI Tangier combines modernism and sustainable values. Uniting traditional Moroccan hospitality with the dynamism of the city of Tangier, the Hotel UI Tangier welcomes you in a unique Pop-art inspired décor. Live differently! Immerse yourself in the lively streets of the old medina, have a unique culinary experience worthy of La Boqueria, and most of all unwind at the pool or at the bar. User Data that includes data about how you use our website and any online services together with any data that you post for publication on our website or through other online services. We process this data to operate our website and ensure relevant content is provided to you, to ensure the security of our website, to maintain back- ups of our website and/or databases and to enable publication and administration of our website, other online services and business. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business. \n Technical Data that includes data about your use of our website and online services such as your IP address, details about your browser, length of visit to pages on our website, page views and navigation paths, details about the number of times you use our website, time zone settings and other technology on the devices you use to access our website. The source of this data is from our analytics tracking system. We process this data to analyse your use of our website and other online services, to administer and protect our business and website, to deliver relevant website content and advertisements to you and to understand the effectiveness of our advertising. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business and to grow our business and to decide our marketing strategy',
  },
}

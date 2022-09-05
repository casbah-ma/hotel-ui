import Footer from '.'
import { links, media } from '@/components/Navbars/Navbar/data'
//stories
import * as DropdownStories from '@/components/Dropdown/Dropdown.stories'
export default {
  title: 'Sections/Footers/Footer_v2',
  component: Footer,
}

const Template = (args) => <Footer {...args} />
export const Default = Template.bind({})

Default.args = {
  links,
  media,
  languages: [...DropdownStories.Default.args.languages],
  logo: 'https://d3lq8p6p6r1qxf.cloudfront.net/1660584751398.png',
  t: (string) => string,
  defaultLanguage: 'en',
}

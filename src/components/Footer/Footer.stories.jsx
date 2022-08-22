import Footer from '.'
import { links } from '@/components/Navbar/data'
//stories
import * as DropdownStories from '@/components/Dropdown/Dropdown.stories'
export default {
  title: 'Sections/Footer',
  component: Footer,
}

const Template = (args) => <Footer {...args} />
export const Default = Template.bind({})

Default.args = {
  links,
  languages: [...DropdownStories.Default.args.languages],
  logo: 'https://d3lq8p6p6r1qxf.cloudfront.net/1660584751398.png',
  t: (string) => string,
  defaultLanguage: 'en',
}

import Footer from '.'
import { links } from '@/components/Navbars/Navbar/data'
//stories
import * as DropdownStories from '@/components/Dropdown/Dropdown.stories'
export default {
  title: 'Sections/Footers/Footer',
  component: Footer,
}

const Template = (args) => <Footer {...args} />
export const Default = Template.bind({})

Default.args = {
  links,
  languages: [...DropdownStories.Default.args.languages],
  description:
    'A signature bedding imagined and designed exclusively for Hotel UI. The bed frames and mattresses are filled',
  logo: 'https://d3lq8p6p6r1qxf.cloudfront.net/1660584751398.png',
  t: (string) => string,
  defaultLanguage: 'en',
}

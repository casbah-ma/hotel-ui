import Navbar from '.'
import { links } from './data'
//stories
import * as ButtonStories from '@/components/Button/Button.stories'
import * as DropdownStories from '@/components/Dropdown/Dropdown.stories'

export default {
  title: 'Components/Navbar',
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  links,
  actionProps: { ...ButtonStories.Primary.args, label: 'Book Now' },
  languages: [...DropdownStories.Default.args.languages],
  logo: 'https://d3lq8p6p6r1qxf.cloudfront.net/1660584751398.png',
  t: (string) => string,
  defaultLanguage: 'en',
}

import Navbar_v2 from '.'
import { links } from './data'
//stories
import * as ButtonStories from '@/components/Button/Button.stories'
import * as DropdownStories from '@/components/Dropdown/Dropdown.stories'

export default {
  title: 'Components/Navbar_v2',
  component: Navbar_v2,
}

const Template = (args) => <Navbar_v2 {...args} />

export const Default = Template.bind({})
Default.args = {
  links,
  actionProps: { ...ButtonStories.Secondary.args, label: 'Book Now' },
  languages: [...DropdownStories.Default.args.languages],
  logo: 'https://d3lq8p6p6r1qxf.cloudfront.net/1660584751398.png',
  t: (string) => string,
  defaultLanguage: 'en',
}

export const Transparent = Template.bind({})
Transparent.args = {
  ...Default.args,
  transparent: true,
}

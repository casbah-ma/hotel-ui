import Layout from '.'
import * as NavbarStories from '@/components/Navbars/Navbar/Navbar.stories'
import * as FooterStories from '@/components/Footers/Footer/Footer.stories'
import * as Footer_v2Stories from '@/components/Footers/Footer_v2/Footer.stories'
export default {
  title: 'Sections/Layout',
  component: Layout,
  argTypes: {
    navVariant: {
      control: {
        type: 'radio',
        options: ['v1', 'v2'],
      },
    },
    footVariant: {
      control: {
        type: 'radio',
        options: ['v1', 'v2'],
      },
    },
  },
}

const Template = (args) => <Layout {...args} />

export const Version1 = Template.bind({})
export const Version2 = Template.bind({})
Version1.args = {
  navVariant: 'v1',
  footVariant: 'v1',
  navbarProps: NavbarStories.Default.args,
  footerProps: FooterStories.Default.args,
}
Version2.args = {
  navVariant: 'v2',
  footVariant: 'v2',
  navbarProps: { ...NavbarStories.Default.args },
  footerProps: { ...Footer_v2Stories.Default.args },
}

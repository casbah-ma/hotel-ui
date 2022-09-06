import Layout from '.'
import * as NavbarStories from '@/components/Navbars/Navbar/Navbar.stories'
import * as FooterStories from '@/components/Footers/Footer/Footer.stories'
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
  },
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  navVariant: 'v1',
  navbarProps: { ...NavbarStories.Default.args },
  footerProps: { ...FooterStories.Default.args },
}

import Layout from '.'
import * as NavbarStories from '@/components/Navbar/Navbar.stories'
import * as FooterStories from '@/components/Footer/Footer.stories'
export default {
  title: 'Sections/Layout',
  component: Layout,
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  navbarProps: { ...NavbarStories.Default.args },
  footerProps: { ...FooterStories.Default.args },
}

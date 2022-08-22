import { stringify } from 'postcss'
import Dropdown from '.'
import Centre from '../Centre'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [(stroy) => <Centre>{stroy()}</Centre>],
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  languages: ['en', 'fr', 'ar'],
  defaultLanguage: 'en',
}

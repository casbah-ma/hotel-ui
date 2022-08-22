import InfoItem from '.'
import Centre from '@/components/Centre'

export default {
  title: 'Components/InfoItem',
  component: InfoItem,
  decorators: [(story) => <Centre>{story()}</Centre>],
}

const Template = (args) => <InfoItem {...args} />

export const Default = Template.bind({})
Default.args = {
  infoName: 'Name:',
  infoValue: 'Evolution',
}

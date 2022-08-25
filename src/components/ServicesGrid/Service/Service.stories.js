//components
import Service from '.'
import Centre from '@/components/Centre'
//icons
import { PlusIcon } from '@heroicons/react/24/solid'

export default {
  title: 'Components/Service',
  component: Service,
  decorators: [(story) => <Centre>{story()}</Centre>],
}

const Template = (args) => <Service {...args} />

export const Default = Template.bind({})
Default.args = {
  serviceName: 'Free wifi',
  circleBg: 'gray',
  Icon: PlusIcon,
}

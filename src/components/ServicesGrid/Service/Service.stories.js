//components
import Service from '.'
//icons
import { PlusIcon } from '@heroicons/react/24/solid'
import { variants } from './Service.styles'

export default {
  title: 'Components/Service',
  component: Service,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Service {...args} />

export const V1 = Template.bind({})
V1.args = {
  serviceName: 'Free wifi',
  circleBg: 'gray',
  Icon: PlusIcon,
}

export const V2 = Template.bind({})
V2.args = {
  serviceName: 'Free wifi',
  Icon: PlusIcon,
  variant: 'v2',
  iconColor: '#21B67C',
}

export const V3 = Template.bind({})
V3.args = {
  ...V2.args,
  serviceName:
    'La connexion Wifi gratuite dans les parties communes et privées',
  variant: 'v3',
}

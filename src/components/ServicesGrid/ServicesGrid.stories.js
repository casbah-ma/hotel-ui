import { bgColors } from '@/styles/theming'
//components
import ServicesGrid from '.'
//icons
import {
  CheckOut,
  Gym,
  Massage,
  Shower,
  Tv,
  Wifi,
  YogaMat,
} from '@/components/Icons'

const services = [
  { serviceName: 'Free Wifi', Icon: Wifi },
  { serviceName: 'Rainfall Shower', Icon: Shower },
  { serviceName: '4K Television', Icon: Tv },
  { serviceName: 'Check-out', Icon: CheckOut },
  { serviceName: 'Yoga Mat', Icon: YogaMat },
  { serviceName: 'Massage', Icon: Massage },
  { serviceName: '24 Hour Gym', Icon: Gym },
]

export default {
  title: 'Components/ServicesGrid',
  component: ServicesGrid,
  argTypes: {
    circleBg: {
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <ServicesGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  services,
}

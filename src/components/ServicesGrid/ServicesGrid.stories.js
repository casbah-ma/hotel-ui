//components
import ServicesGrid from '.'
//icons
import {
  CheckOut,
  RentalCar,
  BusinessCenter,
  Shower,
  Tv,
  YogaMat,
  ChildCare,
  Breakfast
} from '@/components/Icons'
import { variants } from './ServicesGrid.styles'

const services = [
  { serviceName: 'ChildCare', Icon: Breakfast },
  { serviceName: 'Rainfall Shower', Icon: Shower },
  { serviceName: '4K Television', Icon: Tv },
  { serviceName: 'Check-out', Icon: CheckOut },
  { serviceName: 'Yoga Mat', Icon: YogaMat },
  { serviceName: 'BusinessCenter', Icon: BusinessCenter },
  { serviceName: 'RentalCar', Icon: RentalCar },
]

export default {
  title: 'Components/ServicesGrid',
  component: ServicesGrid,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <ServicesGrid {...args} />

export const V1 = Template.bind({})
V1.args = {
  services,
  variant: 'v1',
}

export const V2 = Template.bind({})
V2.args = {
  services,
  variant: 'v2',
}

export const V3 = Template.bind({})
V3.args = {
  services,
  variant: 'v3',
}

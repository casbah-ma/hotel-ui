import { borderColors, colors, bgColors } from '@/styles/theming'
import RoomLabel from '.'

export default {
  title: 'Components/RoomLabel',
  component: RoomLabel,
  argTypes: {
    borderColor: {
      options: Object.keys(borderColors),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <RoomLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  roomNumber: '0 6',
  roomName: 'meeting room',
  borderColor: 'primary',
}

export const Blue = Template.bind({})
Blue.args = {
  ...Default.args,
  borderColor: 'blue',
}

import GuestCard from '.'

export default {
  title: 'Components/Cards/GuestCard',
  component: GuestCard,
}

const Template = (args) => <GuestCard {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'Adults',
  value: 1,
}

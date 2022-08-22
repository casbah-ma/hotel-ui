import Map from '.'

export default {
  title: 'Components/Map',
  component: Map,
}

const Template = (args) => <Map {...args} />
export const Default = Template.bind({})
Default.args = {
  long: -5.796029414390299,
  lat: 35.775781158640214,
}

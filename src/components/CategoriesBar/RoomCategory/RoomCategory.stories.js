import RoomCategory from '.'

export default {
  title: 'Components/CategoriesSwiper/RoomCategory',
  component: RoomCategory,
}

const Template = (args) => <RoomCategory {...args} />

export const Default = Template.bind({})
Default.args = {
  categoryName: 'Theatre',
  active: '',
}

export const Active = Template.bind({})
Active.args = {
  categoryName: 'Theatre',
  active: 'Theatre',
}

import InfoItems from '.'
import Centre from '@/components/Centre'

const infos = [
  {
    infoName: 'Name',
    infoValue: 'Evolution',
  },
  {
    infoName: 'Type',
    infoValue: 'School Room',
  },
  {
    infoName: 'Guests',
    infoValue: '32',
  },
  {
    infoName: 'Sq M',
    infoValue: '129M',
  },
]
export default {
  title: 'Components/CategoriesSwiper/InfoItems',
  component: InfoItems,
  decorators: [(story) => <Centre>{story()}</Centre>],
}

const Template = (args) => <InfoItems {...args} />

export const Default = Template.bind({})
Default.args = {
  infos,
}

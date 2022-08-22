import InfoItems from '.'
import Centre from '@/components/Centre'

const infos = [
  {
    id: '1',
    infoName: 'Name:',
    infoValue: 'Evolution',
  },
  {
    id: '2',
    infoName: 'Type:',
    infoValue: 'School Room',
  },
  {
    id: '3',
    infoName: 'Guests:',
    infoValue: '32',
  },
  {
    id: '4',
    infoName: 'Sq M:',
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

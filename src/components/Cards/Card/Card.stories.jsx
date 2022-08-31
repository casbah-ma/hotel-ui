import Card from '.'
import Centre from '@/components/Centre'

const props = {
  variant: '',
  ImgUrl: 'https://source.unsplash.com/random/?hotel',
  direction: 'horizontal',
  header: {
    title: 'Rooms',
    description:
      'Our rooms offer all the necessary amenities and facilities for a prosperous stay.',
  },
  linkCard: {
    description:
      'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
    link: '#',
  },
}

export default {
  title: 'Components/Cards/Card',
  component: Card,
  decorators: [(story) => <Centre>{story()}</Centre>],
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  ...props,
}

export const Defult_Vertical = Template.bind({})
Defult_Vertical.args = {
  ...props,
  ImgUrl: 'https://source.unsplash.com/random/?hotel',
  direction: 'vertical',
}

export const HeaderCard = Template.bind({})
HeaderCard.args = {
  ...props,
  variant: 'header',
}

export const LinkCard = Template.bind({})
LinkCard.args = {
  ...props,
  variant: 'link',
}

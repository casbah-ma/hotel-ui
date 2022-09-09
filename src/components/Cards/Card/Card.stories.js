import Card from '.'

const props = {
  size: '',
  image: 'https://source.unsplash.com/random/?hotel',
  direction: 'horizontal',
  linkCard: {
    description:
      'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
    link: {
      href: '/',
      defaultLanguage: 'en',
      languages: ['en', 'fr', 'ar'],
    },
  },
}

export default {
  title: 'Components/Cards/Card',
  component: Card,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'lg'],
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
  },
}

const Template = (args) => <Card {...args} />

export const Small = Template.bind({})
Small.args = {
  ...props,
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  ...props,
  size: 'lg',
}

import TextCard from '.'

export default {
  title: 'Components/Cards/TextCard',
  component: TextCard,
}

const Template = (args) => <TextCard {...args} />

export const Small = Template.bind({})
Small.args = {
  variant: 'smallWithText',
  src: 'https://source.unsplash.com/random/?hotel',
  text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
  link: {
    href: '/',
    defaultLanguage: 'en',
    languages: ['en', 'fr', 'ar'],
  },
}

export const Large = Template.bind({})
Large.args = {
  ...Small.args,
  variant: 'largeWithText',
}

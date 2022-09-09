import Explore from '.'

export default {
  title: 'Sections/Explores/Explore',
  component: Explore,
}

const Template = (args) => <Explore {...args} />
export const Version1 = Template.bind({})
export const Version2 = Template.bind({})

Version1.args = {
  header: {
    title: 'Explore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    direction: 'vertical',
  },
  cards: [
    {
      size: 'lg',
      direction: 'horizontal',
      description:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      image: 'https://source.unsplash.com/random/?hotel',
      linkCard: {
        description:
          'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
        link: {
          href: '/',
          defaultLanguage: 'en',
          languages: ['en', 'fr', 'ar'],
        },
      },
    },
    {
      size: 'lg',
      direction: 'horizontal',
      description:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      image: 'https://source.unsplash.com/random/?room',
      linkCard: {
        description:
          'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
        link: {
          href: '/',
          defaultLanguage: 'en',
          languages: ['en', 'fr', 'ar'],
        },
      },
    },
  ],
}

Version2.args = {
  variant: 'v2',
  header: {
    title: 'Explore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    direction: 'vertical',
    withBorder: true,
  },
  cards: [
    {
      size: 'lg',
      description:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      image: 'https://source.unsplash.com/random/?hotel',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
    {
      size: 'lg',
      description:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      image: 'https://source.unsplash.com/random/?room',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
  ],
}

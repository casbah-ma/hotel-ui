import Explore_v2 from '.'

export default {
  title: 'Sections/Explores/Explore_v2',
  component: Explore_v2,
}

const Template = (args) => <Explore_v2 {...args} />

export const Default = Template.bind({})
Default.args = {
  header: {
    title: 'Sleep Peacefully',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    derction: 'vertical',
  },
  data: [
    {
      src: 'https://source.unsplash.com/random/?hotel',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      variant: 'largeWithText',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
    {
      src: 'https://source.unsplash.com/random/?room',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      variant: 'smallWithText',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
    {
      src: 'https://source.unsplash.com/random/?motel',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      variant: 'largeWithText',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
    {
      src: 'https://source.unsplash.com/random/?hostel',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      variant: 'largeWithText',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
    {
      src: 'https://source.unsplash.com/random/?food',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      variant: 'smallWithText',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
    {
      src: 'https://source.unsplash.com/random/?restaurant',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
      variant: 'largeWithText',
      link: {
        href: '/',
        defaultLanguage: 'en',
        languages: ['en', 'fr', 'ar'],
      },
    },
  ],
}

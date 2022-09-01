import StyledHero from '.'

export default {
  title: 'Sections/Heros/StyledHero',
  component: StyledHero,
}

const Template = (args) => <StyledHero {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'The best way to plan your next trip.',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit quisque morbi congue convallis risus.',
  image: 'https://source.unsplash.com/random/?hotel',
}

import NotFound from '.'

export default {
  title: 'Components/NotFound',
  component: NotFound,
  argTypes: {
    variant: {},
  },
}

const Template = (args) => <NotFound {...args} />
export const Primary = Template.bind({})
Primary.args = {
  title: 'Page not found',
  text: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLabel: 'Back to Home page',
  handleClick: () => console.log('clicked'),
}

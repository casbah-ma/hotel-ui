import Hero from '.'
import Button from '@/components/Button'
import * as ButtonProps from '@/components/Button/Button.stories'

export default {
  title: 'Sections/Heros/Hero',
  component: Hero,
}

const Template = (args) => <Hero {...args} />
export const Example1 = Template.bind({})
export const Example2 = Template.bind({})
export const Example3 = Template.bind({})

Example1.args = {
  title: 'Bienvenue',
  subtitle: 'Watch anywhere. Cancel anytime.',
  image:
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  children: <Button {...ButtonProps.Dark.args} />,
}

Example2.args = {
  ...Example1.args,
  withBorder: true,
  gradient: true,
}

Example3.args = {
  ...Example2.args,
  withBorder: false,
  gradient: true,
  position: 'start',
}

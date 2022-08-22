import Hero from '.'
import Button from '@/components/Button'
import * as ButtonProps from '@/components/Button/Button.stories'

export default {
  title: 'Sections/Heros',
  component: Hero,
}

const Template = (args) => <Hero {...args} />
export const Default = Template.bind({})

Default.args = {
  title: 'Bienvenue',
  subtitle: 'Watch anywhere. Cancel anytime.',
  image:
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  children: <Button {...ButtonProps.Dark.args} />,
}

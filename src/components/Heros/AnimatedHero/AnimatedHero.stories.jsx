import AnimatedHero from '.'
import Button from '@/components/Button'
import { PlayIcon } from '@heroicons/react/solid'

export default {
  title: 'Sections/AnimatedHero',
  component: AnimatedHero,
}

const Template = (args) => <AnimatedHero {...args} />

export const Default = Template.bind({})
export const Example1 = Template.bind({})
Default.args = {
  image:
    'https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80',
  title: 'Feel the vibrancy',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  children: <Button variant="horizontal" label="Play" Icon={PlayIcon} />,
}

Example1.args = {
  image:
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4332&q=80',
  title: 'Unparalleled signature wellbeign',
  description:
    'Immaculate whiteness, the murmur of fountains, aromatic fragrances…When you come into the Hotel UI Marrakech Spa, you will immediately feel taken over in the atrium by a rush of relaxation like you’ve never felt before.',
  children: (
    <Button label="Check Availability" onClick={() => {}} variant="primary" />
  ),
}

import AnimatedHero_v2 from '.'
import Button from '@/components/Button'
import { PlayIcon } from '@heroicons/react/24/solid'

export default {
  title: 'Sections/Heros/AnimatedHero_v2',
  component: AnimatedHero_v2,
  argTypes: {
    position: {
      options: ['start', 'center'],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <AnimatedHero_v2 {...args} />
export const Example1 = Template.bind({})
export const Example2 = Template.bind({})
export const Example3 = Template.bind({})
export const Example4 = Template.bind({})
Example1.args = {
  image: 'https://www.youtube.com/watch?v=UZacXStxhIc',
  title: 'Feel the vibrancy',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  clickTitle: true,
  children: (
    <Button
      label=""
      bgColor="#21B67C"
      Icon={PlayIcon}
      onClick={function noRefCheck() {}}
      variant="rounded"
    />
  ),
}

Example2.args = {
  ...Example1.args,
  clickTitle: false,
  children: (
    <Button
      color="white"
      bgColor="#21B67C"
      label="Check Availability"
      onClick={function noRefCheck() {}}
      variant="secondary"
    />
  ),
}

Example3.args = {
  ...Example2.args,
  gradient: true,
}

Example4.args = {
  ...Example3.args,
  title: 'Kids’ club: once upon a time in Le Jardin de Lila...',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo, dui dignissim pharetra, neque id nullam egestas senectus. Nisi convallis ridiculus amet amet. Nunc maecenas enim scelerisque viverra sit eget vestibulum. Eros elementum mattis tristique nunc lacus, facilisi viverra donec. Tristique etiam mattis lectus nisi faucibus id urna.',
  position: 'start',
  children: (
    <Button
      color="white"
      bgColor="#21B67C"
      label="Check Availability"
      onClick={function noRefCheck() {}}
      variant="primary"
    />
  ),
}

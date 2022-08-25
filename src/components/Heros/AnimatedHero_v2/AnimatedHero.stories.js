import AnimatedHero_v2 from '.'
import Button from '@/components/Button'
import { PlayIcon } from '@heroicons/react/24/solid'

export default {
  title: 'V2/Components/Heros/AnimatedHero_v2',
  component: AnimatedHero_v2,
}

const Template = (args) => <AnimatedHero_v2 {...args} />
export const Example1 = Template.bind({})
export const Example2 = Template.bind({})
Example1.args = {
  image: 'https://source.unsplash.com/random/?hotel',
  title: 'Feel the vibrancy',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  children: (
    <Button
      bgColor="#21B67C"
      Icon={PlayIcon}
      onClick={function noRefCheck() {}}
      variant="rounded"
    />
  ),
}

Example2.args = {
  image: 'https://source.unsplash.com/random/?hotel',
  title: 'Feel the vibrancy',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  children: (
    <Button
      color="white"
      bgColor="#21B67C"
      label="Check Availability"
      onClick={function noRefCheck() {}}
      variant=""
    />
  ),
}

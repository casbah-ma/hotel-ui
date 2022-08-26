import { fontSizes } from '@/styles/theming'
import Paragraph from '.'

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    fontSize: {
      options: Object.keys(fontSizes),
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Paragraph {...args} />

export const Regular = Template.bind({})
Regular.args = {
  fontSize: 'rg',
  description:
    'Located in an idyllic green scenery right at the foot of Cape Malataba, the Hotel UI Tangier combines modernism and sustainable values. Uniting traditional Moroccan hospitality with the dynamism of the city of Tangier, the Hotel UI Tangier welcomes you in a unique Pop-art inspired décor. Live differently! Immerse yourself in the lively streets of the old medina, have a unique culinary experience worthy of La Boqueria, and most of all unwind at the pool or at the bar.',
}

export const Medium = Template.bind({})
Medium.args = {
  ...Regular.args,
  fontSize: 'md',
}

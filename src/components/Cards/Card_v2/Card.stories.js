import Card_v2 from '.'

export default {
  title: 'Components/Cards/Card_V2',
  component: Card_v2,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Card_v2 {...args} />
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})

// Small card with image and title
Small.args = {
  size: 'small',
  date: 'Posted in 20 March 2022',
  description:
    'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
  image: 'https://source.unsplash.com/random/?hotel',
}

// Medium card with image and title
Medium.args = {
  ...Small.args,
  size: 'medium',
}

// Large card with image and title
Large.args = {
  ...Small.args,
  size: 'large',
}

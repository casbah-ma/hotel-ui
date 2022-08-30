import ImageCard from '.'

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  argTypes: {
    variant: {
      options: [
        'shape1',
        'shape2',
        'shape3',
        'shape4',
        'shape5',
        'ImageVerticalTall',
        'ImageFlexible',
      ],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <ImageCard {...args} />
export const Shape1 = Template.bind({})
export const Shape2 = Template.bind({})
export const Shape3 = Template.bind({})
export const Shape4 = Template.bind({})
export const Shape5 = Template.bind({})
export const Shape6 = Template.bind({})
export const ImageVerticalTall = Template.bind({})
export const ImageFlexible = Template.bind({})
export const Small = Template.bind({})

Shape1.args = {
  variant: 'shape1',
  src: 'https://source.unsplash.com/random/?hotel',
}

Shape2.args = {
  ...Shape1.args,
  variant: 'shape2',
}

Shape3.args = {
  ...Shape1.args,
  variant: 'shape3',
}
Shape4.args = {
  ...Shape1.args,
  variant: 'shape4',
}
Shape5.args = {
  ...Shape1.args,
  variant: 'shape5',
}

Shape6.args = {
  ...Shape1.args,
  variant: 'shape6',
}

ImageVerticalTall.args = {
  ...Shape1.args,
  variant: 'imageVerticalTall',
}

ImageFlexible.args = {
  ...Shape1.args,
  variant: 'imageFlexible',
}

Small.args = {
  ...Shape1.args,
  variant: 'small',
}

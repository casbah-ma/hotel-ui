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
        'ImageVerticalTall',
        'ImageFlexible',
        'ImageHorizontal',
      ],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <ImageCard {...args} />
export const Shape1 = Template.bind({})
export const Shape2 = Template.bind({})
export const Shape3 = Template.bind({})
export const ImageVerticalTall = Template.bind({})
export const ImageFlexible = Template.bind({})
export const Small = Template.bind({})
export const ImageHorizontal = Template.bind({})

Shape1.args = {
  variant: 'shape1',
  src: 'https://source.unsplash.com/random/?hotel',
}

Shape2.args = {
  variant: 'shape2',
  src: 'https://source.unsplash.com/random/?hotel',
}

Shape3.args = {
  variant: 'shape3',
  src: 'https://source.unsplash.com/random/?hotel',
}

ImageVerticalTall.args = {
  variant: 'imageVerticalTall',
  src: 'https://source.unsplash.com/random/?hotel',
}

ImageFlexible.args = {
  variant: 'imageFlexible',
  src: 'https://source.unsplash.com/random/?hotel',
}

Small.args = {
  variant: 'small',
  src: 'https://source.unsplash.com/random/?hotel',
}

ImageHorizontal.args = {
  variant: 'imageHorizontal',
  src: 'https://source.unsplash.com/random/?hotel',
}

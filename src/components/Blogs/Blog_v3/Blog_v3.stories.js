import Blog_v3 from '.'
import * as TitleStories from '@/components/Title/Title.stories'

export default {
  title: 'Sections/Blogs/Blog_v3',
  component: Blog_v3,
}

const Template = (args) => <Blog_v3 {...args} />

export const ImageOnLeft = Template.bind({})
ImageOnLeft.args = {
  title: { ...TitleStories.H2.args },
  text: 'Located in an idyllic green scenery right at the foot of Cape Malataba, the Hotel UI Tangier combines modernism and sustainable values. Uniting traditional Moroccan hospitality with the dynamism of the city of Tangier, the Hotel UI Tangier welcomes you in a unique Pop-art inspired décor.\n Live differently! Immerse yourself in the lively streets of the old medina, have a unique culinary experience worthy of La Boqueria, and most of all unwind at the pool or at the bar.',
  images: [
    {
      variant: 'imageVertical',
      src: 'https://source.unsplash.com/random/?hotel',
    },
    {
      variant: 'extraSmall',
      src: 'https://source.unsplash.com/random/?hotel',
    },
  ],
  imagePosition: 'left',
}

export const ImageOnRight = Template.bind({})
ImageOnRight.args = {
  ...ImageOnLeft.args,
  imagePosition: 'right',
}

export const ContentCentred = Template.bind({})
ContentCentred.args = {
  ...ImageOnLeft.args,
  contentIsCentred: true,
}

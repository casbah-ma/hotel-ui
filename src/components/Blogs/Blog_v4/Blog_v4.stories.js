import Blog_v4 from '.'
import * as TitleStories from '@/components/Title/Title.stories'

export default {
  title: 'Sections/Blogs/Blog_v4',
  component: Blog_v4,
}

const Template = (args) => <Blog_v4 {...args} />
export const Default = Template.bind({})
Default.args = {
  title: {
    ...TitleStories.H2.args,
    title: 'Experience it all... vividly at Dixil Casablanca!',
  },
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ut quam egestas purus duis mi orci semper. Sit vitae at amet egestas sed. Vivamus convallis mattis at interdum malesuada et non cras elit. Venenatis, enim, neque, enim sagittis vitae volutpat tempus quis. Tortor, tellus, vitae tempus lectus nibh arcu. Arcu vestibulum duis tempor imperdiet a id. Tristique in sed id sem convallis eget tortor.',
  bgColor: 'black',
  color: 'white',
}

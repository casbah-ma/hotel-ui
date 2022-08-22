import Blog from '.'
import * as TitleStories from '@/components/Title/Title.stories'
import * as ImageCardStories from '@/components/Cards/ImageCard/ImageCard.stories'
import * as ButtonProps from '@/components/Button/Button.stories'

export default {
  title: 'Sections/Blog',
  component: Blog,
}

const Template = (args) => <Blog {...args} />

export const Default = Template.bind({})
Default.args = {
  title: { ...TitleStories.H2.args },
  articles: [
    'Located in an idyllic green scenery right at the foot of Cape Malataba, the DIXIL Tangier combines modernism and sustainable values. Uniting traditional Moroccan hospitality with the dynamism of the city of Tangier, the DIXIL Tangier welcomes you in a unique Pop-art inspired décor.\n Live differently! Immerse yourself in the lively streets of the old medina, have a unique culinary experience worthy of La Boqueria, and most of all unwind at the pool or at the bar.',
  ],
}

export const ImageAtBottom = Template.bind({})
ImageAtBottom.args = {
  ...Default.args,
  image: { ...ImageCardStories.ImageFlexible.args },
  imagePosition: 'bottom',
}

export const ImageOnLeft = Template.bind({})
ImageOnLeft.args = {
  ...Default.args,
  image: { ...ImageCardStories.ImageVerticalTall.args },
  imagePosition: 'left',
}

export const ImageOnRight = Template.bind({})
ImageOnRight.args = {
  ...ImageOnLeft.args,
  imagePosition: 'right',
}

export const WithButton = Template.bind({})
WithButton.args = {
  ...ImageOnLeft.args,
  actionProps: ButtonProps.Dark.args,
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  ...Default.args,
  articles: [
    'Located in an idyllic green scenery right at the foot of Cape Malataba, the DIXIL Tangier combines modernism and sustainable values. Uniting traditional Moroccan hospitality with the dynamism of the city of Tangier, the DIXIL Tangier welcomes you in a unique Pop-art inspired décor.',
    'Live differently! Immerse yourself in the lively streets of the old medina, have a unique culinary experience worthy of La Boqueria, and most of all unwind at the pool or at the bar.',
  ],
}

export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
  ...Default.args,
  articles: [
    'The hotel DIXIL Tangier Malataba is an ideal and warm place for holding your professional or private events, given its unique location close to all amenities. It allows for an escape to the green landscapes of Tangiers, while being a few steps from the Mediterranean, the gardens of the Villa Harris and the eponymous museum.',
    "Equipped with the latest audio / video, computer and broadband internet equipment, as well as furniture and event material, the DIXIL hotel's Forum Rencontres will cater all styles and needs. DIXIL's MICE space is equipped with modular and expandable spaces of up to 600 m², which can be used for conferences, exhibitions, birthdays or weddings.",
    'The experts in event organization at the DIXIL hotel are passionate about the city of Tangier, its history, its culture and are committed to organising a memorable evening. Whether face - to - face or on - line, the DIXIL hotel welcomes the new“ Digital Nomads” in its spaces dedicated to COWORKING and adaptable to any needs.Our team can propose assistance for residence legal formalities.',
  ],
}

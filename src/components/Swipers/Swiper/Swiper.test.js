import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Swiper.stories'
const { CardsSlider, VerticalCardsSlider } = composeStories(stories)

describe('Swiper', () => {
  it('should render', () => {
    render(<CardsSlider />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('should render vertical', () => {
    render(<VerticalCardsSlider />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})

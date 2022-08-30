import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Swiper.stories'
const { CardsExample, ImagesExample } = composeStories(stories)

describe('Swiper', () => {
  it('should render', () => {
    render(<CardsExample />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('should render vertical', () => {
    render(<ImagesExample />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})

import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Guests.stories'

const { GuestsCard } = composeStories(stories)

describe('guests component', () => {
  const onGuestChange = jest.fn()
  it('should render correctly', () => {
    render(<GuestsCard />)
    const guestsCardContainer = screen.getByTestId('guests-card-container')
    expect(guestsCardContainer).toBeInTheDocument()
  })
  it('should render correctly with props', () => {
    render(<GuestsCard {...GuestsCard.args} />)
    const guestsCardContainer = screen.getByTestId('guests-card-container')
    expect(guestsCardContainer).toBeInTheDocument()
  })
})

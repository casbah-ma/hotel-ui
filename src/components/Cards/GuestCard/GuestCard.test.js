import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './GuestCard.stories'

const { Default } = composeStories(stories)
describe('Guest Card ', () => {
  it('should render correctly', () => {
    render(<Default />)
    const DefaultContainer = screen.getByTestId('guest-card-container')
    expect(DefaultContainer).toBeInTheDocument()
  })
  it('should render correctly with props', () => {
    render(<Default {...Default.args} />)
    const DefaultContainer = screen.getByTestId('guest-card-container')
    expect(DefaultContainer).toBeInTheDocument()
  })
})

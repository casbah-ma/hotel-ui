import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Card.stories'

const { Small } = composeStories(stories)
describe('Card', () => {
  it('should render card Default', async () => {
    render(<Small />)
    const card = await screen.findAllByRole('img')
    expect(card).toHaveLength(1)
  })
  it('should render card with description', () => {
    render(<Small />)
    const card = screen.getByTestId('info')
    expect(card).toBeInTheDocument()
  })
})

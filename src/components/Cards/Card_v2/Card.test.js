import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Card.stories'

const { Small } = composeStories(stories)
describe('Card_v2', () => {
  it('should render Card_v2 Default', async () => {
    render(<Small />)
    const card = await screen.findAllByRole('img')
    expect(card).toHaveLength(1)
  })
  it('should render Card_v2 with description', () => {
    render(<Small />)
    const card = screen.getByText(Small.args.description)
    expect(card).toBeInTheDocument()
  })
})

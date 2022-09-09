import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Card.stories'

const { Small } = composeStories(stories)
describe('Card', () => {
  it('should render card Small', async () => {
    render(<Small />)
    const card = await screen.findAllByRole('img')
    expect(card).toHaveLength(1)
  })
})

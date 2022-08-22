import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ImageCard.stories'

const { Shape1 } = composeStories(stories)
describe('Card', () => {
  it('should render card Default', async () => {
    render(<Shape1 />)
    const card = await screen.findAllByRole('img')
    expect(card).toHaveLength(1)
  })
})

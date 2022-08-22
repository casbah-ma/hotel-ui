import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Gallery.stories'

const { Default } = composeStories(stories)
describe('Gallery ', () => {
  it('should render Default Gallery with images', async () => {
    render(<Default />)
    const Gallery = await screen.findAllByRole('img')
    expect(Gallery).toHaveLength(9)
  })
})

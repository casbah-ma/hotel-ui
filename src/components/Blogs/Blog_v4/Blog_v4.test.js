import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './Blog_v4.stories'

const { Default } = composeStories(stories)

describe('Blog_V4 component', () => {
  it('Renders the blog component', () => {
    render(<Default />)
    const blogContainer = screen.getByTestId('blogv4-container')
    expect(blogContainer).toBeInTheDocument()
  })
})

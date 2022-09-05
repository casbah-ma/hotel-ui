import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './Blog_v3.stories'

const { ImageOnLeft } = composeStories(stories)

describe('Blog_V3 component', () => {
  it('Renders the blog component', () => {
    render(<ImageOnLeft />)
    const blogContainer = screen.getByTestId('blogv3-container')
    expect(blogContainer).toBeInTheDocument()
  })

  it('Renders two images', () => {
    render(<ImageOnLeft />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })
})

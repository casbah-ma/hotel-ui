import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './Blog.stories'

const { Default, ImageAtBottom, TwoColumns } = composeStories(stories)

describe('Blog component', () => {
  it('Renders the blog component', () => {
    render(<Default />)
    const blogContainer = screen.getByTestId('blog-container')
    expect(blogContainer).toBeInTheDocument()
  })

  it('Renders an image when the image prop is passed', () => {
    render(<ImageAtBottom />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('Renders the coorect number of paragraphs', () => {
    render(<TwoColumns />)
    const paragraphs = screen.getAllByRole('article')
    expect(paragraphs).toHaveLength(2)
  })
})

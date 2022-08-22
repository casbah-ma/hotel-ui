const { composeStories } = require('@storybook/react')
import { render, screen } from '@testing-library/react'
import * as stories from './Header.stories'

const { Normal, LargeTitle } = composeStories(stories)

describe('Header component', () => {
  it('Renders a header', () => {
    render(<Normal />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(Normal.args.title)
    const description = screen.getByText(Normal.args.description)
    expect(description).toBeInTheDocument()
  })

  it('Renders a header with large title', () => {
    render(<LargeTitle />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(LargeTitle.args.title)
    const description = screen.getByText(LargeTitle.args.description)
    expect(description).toBeInTheDocument()
  })
})

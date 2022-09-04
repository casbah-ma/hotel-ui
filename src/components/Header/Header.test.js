import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './Header.stories'

const { Default, LargeTitle } = composeStories(stories)

describe('Header component', () => {
  it('Renders a header', () => {
    render(<Default />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(Default.args.title)
    const description = screen.getByText(Default.args.description)
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

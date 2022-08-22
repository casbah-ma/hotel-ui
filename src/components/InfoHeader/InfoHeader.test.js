const { composeStories } = require('@storybook/react')
import { render, screen } from '@testing-library/react'
import * as stories from './InfoHeader.stories'

const { Default } = composeStories(stories)

describe('Header component', () => {
  it('Renders a header', () => {
    render(<Default />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(Default.args.title)
    const subTitle = screen.getByText(Default.args.subtitle)
    expect(subTitle).toBeInTheDocument()
  })
})

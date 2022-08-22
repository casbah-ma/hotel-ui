const { composeStories } = require('@storybook/react')
import { render, screen } from '@testing-library/react'
import * as stories from './Title.stories'

const { H1 } = composeStories(stories)
describe('Title component', () => {
  it('Renders a heading element', () => {
    render(<H1 />)
    const h1 = screen.getByRole('heading')
    expect(h1).toHaveTextContent(H1.args.title)
  })
})

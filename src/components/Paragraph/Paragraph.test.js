import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Paragraph.stories'

const { Regular } = composeStories(stories)

describe('Paragrapgh component', () => {
  it('Renders the correct text', () => {
    render(<Regular />)
    const text = screen.getByText(Regular.args.description)
    expect(text).toBeInTheDocument()
  })
})

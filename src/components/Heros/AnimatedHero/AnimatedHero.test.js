import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './AnimatedHero.stories'

const { Default } = composeStories(stories)

describe('AnimatedHero component', () => {
  it('Renders the correct text', () => {
    render(<Default />)
    const text = screen.getByText(stories.Default.args.description)
    expect(text).toBeInTheDocument()
  })
  it('Renders the correct title', () => {
    render(<Default />)
    const title = screen.getByText(stories.Default.args.title)
    expect(title).toBeInTheDocument()
  })
})

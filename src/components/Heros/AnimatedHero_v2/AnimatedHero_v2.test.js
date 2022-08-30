import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './AnimatedHero_v2.stories'

const { Example1 } = composeStories(stories)

describe('AnimatedHero component', () => {
  it('Renders the correct text', () => {
    render(<Example1 />)
    const text = screen.getByText(stories.Example1.args.subtitle)
    expect(text).toBeInTheDocument()
  })
  it('Renders the correct title', () => {
    render(<Example1 />)
    const title = screen.getByText(stories.Example1.args.title)
    expect(title).toBeInTheDocument()
  })
})

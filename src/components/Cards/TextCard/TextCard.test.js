import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './TextCard.stories'

const { Small } = composeStories(stories)

describe('TextCard component', () => {
  it('Renders an image', () => {
    render(<Small />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('Renders the correct text', () => {
    render(<Small />)
    const text = screen.getByText(Small.args.text)
    expect(text).toBeInTheDocument()
  })
})

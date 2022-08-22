import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Label.stories'

const { Small } = composeStories(stories)

describe('Label component', () => {
  it('Renders the correct label text', () => {
    render(<Small />)
    const labelText = screen.getByText(Small.args.labelText)
    expect(labelText).toBeInTheDocument()
  })
})

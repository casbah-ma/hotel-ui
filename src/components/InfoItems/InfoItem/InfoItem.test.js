import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './InfoItem.stories'

const { Default } = composeStories(stories)

describe('InfoItem component', () => {
  it('Renders the correct name and and value text', () => {
    render(<Default />)
    const name = screen.getByText(Default.args.infoName + ':')
    expect(name).toBeInTheDocument()
    const value = screen.getByText(Default.args.infoValue)
    expect(value).toBeInTheDocument()
  })
})

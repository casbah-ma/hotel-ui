import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './RoomCard_v2.stories'

const { Default } = composeStories(stories)

describe('RoomCard_v2 component', () => {
  it('Renders a header info', () => {
    render(<Default />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(Default.args.headerProps.title)
  })

  it('Renders a paragraph', () => {
    render(<Default />)
    const text = screen.getByText(Default.args.text)
    expect(text).toBeInTheDocument()
  })
})

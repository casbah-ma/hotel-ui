const { composeStories } = require('@storybook/react')
import { render, screen } from '@testing-library/react'
import * as stories from './RoomLabel.stories'

const { Default } = composeStories(stories)

describe('RoomLabel component', () => {
  it('Renders a RoomLabel component with correct number and name', () => {
    render(<Default />)
    const container = screen.getByTestId(/room-label-container/i)
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent(Default.args.roomNumber)
    expect(container).toHaveTextContent(Default.args.roomName)
  })
})

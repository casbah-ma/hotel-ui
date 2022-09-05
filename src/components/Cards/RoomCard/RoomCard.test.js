import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './RoomCard.stories'

const { WithInfoItems } = composeStories(stories)

describe('RoomCard component', () => {
  it('Renders a header info', () => {
    render(<WithInfoItems />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(WithInfoItems.args.title)
  })
})

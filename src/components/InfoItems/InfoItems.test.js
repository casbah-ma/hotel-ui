import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './InfoItems.stories'

const { Default } = composeStories(stories)

describe('InfoItems component', () => {
  it('Renders the correct number of items', () => {
    render(<Default />)
    const items = screen.getAllByTestId('information-room-items')
    expect(items).toHaveLength(Default.args.infos.length)
  })
})

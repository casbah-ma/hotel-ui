const { composeStories } = require('@storybook/react')
import { render, screen } from '@testing-library/react'
import * as stories from './RoomCategory.stories'

const { Default } = composeStories(stories)

describe('RoomCategory component', () => {
  it('Renders the correct category name', () => {
    render(<Default />)
    const categoryName = screen.getByText(Default.args.categoryName)
    expect(categoryName).toBeInTheDocument()
  })
})

import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './CategoriesGrid.stories'

const { Default } = composeStories(stories)
describe('Gallery ', () => {
  it('should render the correct number of grid items', () => {
    render(<Default />)
    const categoryCard = screen.getAllByTestId('category-card')
    expect(categoryCard).toHaveLength(Default.args.cards.length)
  })
})

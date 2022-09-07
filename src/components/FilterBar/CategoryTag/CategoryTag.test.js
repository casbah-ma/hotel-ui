const { composeStories } = require('@storybook/react')
import { render, screen } from '@testing-library/react'
import * as stories from './CategoryTag.stories'

const { V1 } = composeStories(stories)

describe('CategoryTag component', () => {
  it('Renders the correct category name', () => {
    render(<V1 />)
    const categoryName = screen.getByText(
      `${V1.args.categoryName} (${V1.args.quantity})`
    )
    expect(categoryName).toBeInTheDocument()
  })
})

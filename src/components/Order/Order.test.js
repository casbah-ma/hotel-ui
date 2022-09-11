import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Order.stories'

const { Default } = composeStories(stories)

describe('Order', () => {
  it('should render the title', () => {
    render(<Default />)
    const title = screen.getByText(Default.args.title)
    expect(title).toHaveTextContent(
      'Place your order and get your gift card in seconds'
    )
  })
})

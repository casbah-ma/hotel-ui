import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './FormSection.stories'

const { Default } = composeStories(stories)

describe('FormSection', () => {
  it('should render the title', () => {
    render(<Default />)
    const title = screen.getByText(Default.args.title)
    expect(title).toHaveTextContent(
      'We are listening with all ears'
    )
  })
})

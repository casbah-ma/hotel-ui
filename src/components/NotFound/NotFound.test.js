import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './NotFound.stories'

const { Primary  } = composeStories(stories)

describe('NotFound component', () => {
  it('Renders the NotFound component', () => {
    render(<Primary />)
    const NotFound = screen.getByTestId('container')
    expect(NotFound).toBeInTheDocument()
  })

})

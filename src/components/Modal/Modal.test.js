import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Modal.stories'

const { Default } = composeStories(stories)

describe('Modal component', () => {
  it('should render correctly', () => {
    render(<Default />)
    const modalContainer = screen.getByTestId('modal-container')
    expect(modalContainer).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Layout.stories'

const { Version1 } = composeStories(stories)

describe('layout component', () => {
  it('should render correctly', () => {
    render(<Version1 />)
    const layoutContainer = screen.getByTestId('layout-container')
    expect(layoutContainer).toBeInTheDocument()
  })
})

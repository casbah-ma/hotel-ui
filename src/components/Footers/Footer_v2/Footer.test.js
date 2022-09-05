import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Footer.stories'

const { Default } = composeStories(stories)

describe('Footer component', () => {
  const handleSubmit = jest.fn()
  const handleInputChange = jest.fn()

  it('should render correctly', () => {
    render(<Default />)
    const footerContainer = screen.getByTestId('footer-container')
    expect(footerContainer).toBeInTheDocument()
  })

  it('should render correctly with props', () => {
    render(
      <Default
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    )
    const footerContainer = screen.getByTestId('footer-container')
    expect(footerContainer).toBeInTheDocument()
  })

  it('should rendedr with links', () => {
    render(<Default />)
    const links = screen.getByTestId('links')
    expect(links).toBeInTheDocument()
  })

  it('Renders the copyright', () => {
    render(<Default />)
    const copyright = screen.getByTestId('copyright')
    expect(copyright).toBeInTheDocument()
  })
})

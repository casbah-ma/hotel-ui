import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Hero.stories'

const { Example1 } = composeStories(stories)

describe('Hero component', () => {
  it('should render correctly', () => {
    render(<Example1 />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toBeInTheDocument()
  })
  it('should render correctly with props', () => {
    render(<Example1 {...Example1.args} />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toBeInTheDocument()
  })
  it('should render with a title', () => {
    render(<Example1 {...Example1.args} />)
    const title = screen.getByText(Example1.args.title)
    expect(title).toHaveTextContent('Bienvenue')
  })
  it('should render with a subtitle', () => {
    render(<Example1 {...Example1.args} />)
    const subtitle = screen.getByText(Example1.args.subtitle)
    expect(subtitle).toHaveTextContent('Watch anywhere. Cancel anytime.')
  })
})

import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './HeroII.stories'

const { Default } = composeStories(stories)

describe('heroII component', () => {
  it('should render correctly', () => {
    render(<Default />)
    const heroIIContainer = screen.getByTestId('hero-container')
    expect(heroIIContainer).toBeInTheDocument()
  })
  it('should render correctly with props', () => {
    render(<Default {...Default.args} />)
    const heroIIContainer = screen.getByTestId('hero-container')
    expect(heroIIContainer).toBeInTheDocument()
  })
  it('should render with a title', () => {
    render(<Default {...Default.args} />)
    const title = screen.getByText(Default.args.title)
    expect(title).toHaveTextContent('Bienvenue')
  })
  it('should render with a subtitle', () => {
    render(<Default {...Default.args} />)
    const subtitle = screen.getByText(Default.args.subtitle)
    expect(subtitle).toHaveTextContent('Watch anywhere. Cancel anytime.')
  })
})

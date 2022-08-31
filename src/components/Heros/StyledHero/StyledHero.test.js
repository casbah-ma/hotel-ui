import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './StyledHero.stories'

const { Default } = composeStories(stories)

describe('Hero component', () => {
  it('should render correctly', () => {
    render(<Default />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toBeInTheDocument()
  })
  it('should render correctly with props', () => {
    render(<Default {...Default.args} />)
    const heroContainer = screen.getByTestId('hero-container')
    expect(heroContainer).toBeInTheDocument()
  })
  it('should render with a title', () => {
    render(<Default {...Default.args} />)
    const title = screen.getByText(Default.args.title)
    expect(title).toHaveTextContent('The best way to plan your next trip.')
  })
  it('should render with a subtitle', () => {
    render(<Default {...Default.args} />)
    const subtitle = screen.getByText(Default.args.subtitle)
    expect(subtitle).toHaveTextContent(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit quisque morbi congue convallis risus.'
    )
  })
})

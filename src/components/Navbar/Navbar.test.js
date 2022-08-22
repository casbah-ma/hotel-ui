import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Navbar.stories'

const { Default } = composeStories(stories)


describe('Navbar component', () => {
  it.todo('navbar test with useRouter')
  // it('Renders the correct number of links', () => {
  //   render(<Default />)
  //   const navbarItems = screen.getAllByTestId('navbar-item')
  //   expect(navbarItems).toHaveLength(Default.args.links.length)
  // })

  // it('renders a logo', () => {
  //   render(<Default />)
  //   const logo = screen.getByRole('img')
  //   expect(logo).toBeInTheDocument()
  // })
})

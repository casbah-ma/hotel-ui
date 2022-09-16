import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './Contacts.stories'

const { Primary , Secondary } = composeStories(stories)

describe('Blog component', () => {
  it('Renders the blog component', () => {
    render(<Primary />)
    const Contacts = screen.getByTestId('container')
    expect(Contacts).toBeInTheDocument()
  })

  it('Renders the blog component', () => {
    render(<Secondary />)
    const Contacts = screen.getByTestId('container')
    expect(Contacts).toBeInTheDocument()
  })
})

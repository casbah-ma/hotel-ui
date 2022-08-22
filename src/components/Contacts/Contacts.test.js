import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './Contacts.stories'

const { Default } = composeStories(stories)

describe('Blog component', () => {
  it('Renders the blog component', () => {
    render(<Default />)
    const Contacts = screen.getByTestId('container')
    expect(Contacts).toBeInTheDocument()
  })
})

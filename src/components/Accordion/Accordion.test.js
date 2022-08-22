import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Accordion.stories'

const { Default } = composeStories(stories)
describe('Accordion component', () => {
  it('Renders the correct number of items', () => {
    render(<Default />)
    const accordionItems = screen.getAllByTestId('accordion-item')
    expect(accordionItems).toHaveLength(Default.args.items.length)
  })

  it('Open an accordion item', () => {
    render(<Default />)
    const items = screen.getAllByRole('button')
    const itemsContent = screen.getAllByTestId('accordion-item-content')
    expect(itemsContent[0]).toHaveStyle('max-height: 0px')
    fireEvent.click(items[0])
    expect(itemsContent[0]).toHaveStyle('max-height: 1000px')
  })
})

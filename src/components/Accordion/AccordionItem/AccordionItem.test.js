import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'
import * as stories from './AccordionItem.stories'
const { Opened, Closed } = composeStories(stories)

describe('AccordionItem component', () => {
  const mockHandleClick = jest.fn()
  it("Renders an item with a hidden content when it's closed", () => {
    render(<Closed />)
    const itemName = screen.getByText(Closed.args.item.name)
    expect(itemName).toBeInTheDocument()
    const itemContent = screen.getByTestId('accordion-item-content')
    expect(itemContent).toHaveStyle('overflow: hidden')
  })

  it('Calls the toggle function', async () => {
    const user = userEvent.setup()
    render(<Closed handleClick={mockHandleClick} />)
    const item = screen.getByRole('button')
    await user.click(item)
    expect(mockHandleClick).toBeCalledTimes(1)
  })
})

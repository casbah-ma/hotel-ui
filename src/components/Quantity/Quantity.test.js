import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'
import * as stories from './Quantity.stories'

const { Default } = composeStories(stories)

const mockOnMinusClick = jest.fn()
const mockOnPlusClick = jest.fn()
describe('Quantity', () => {
  it('should render', () => {
    render(<Default />)
    const quantity = screen.getByTestId('quantity')
    expect(quantity).toBeInTheDocument()
  })

  it('should render with the correct label text', () => {
    render(<Default />)
    const labelText = screen.getByText(Default.args.title)
    expect(labelText).toBeInTheDocument()
  })

  it('should render with the correct value', () => {
    render(<Default />)
    const value = screen.getByText(Default.args.value)
    expect(value).toBeInTheDocument()
  })

  it('fires the increment and decrement functions on click', async () => {
    const user = userEvent.setup()
    render(
      <Default onMinusClick={mockOnMinusClick} onPlusClick={mockOnPlusClick} />
    )
    //plus button
    const plusButton = screen.getByLabelText(
      `increase ${Default.args.title} amount`
    )
    await user.click(plusButton)
    expect(mockOnPlusClick).toBeCalledTimes(1)
    await user.click(plusButton)
    await user.click(plusButton)
    expect(mockOnPlusClick).toBeCalledTimes(3)
    //minus button
    const minusButton = screen.getByLabelText(
      `decrease ${Default.args.title} amount`
    )
    await user.click(minusButton)
    expect(mockOnMinusClick).toBeCalledTimes(1)
  })
})

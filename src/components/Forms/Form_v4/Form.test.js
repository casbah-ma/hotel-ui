import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Form.stories'

const { Default } = composeStories(stories)

describe('Form_v4 component', () => {
  it('should render correctly', () => {
    render(<Default />)
    const Formv4Container = screen.getByTestId('Form_v4-container')
    expect(Formv4Container).toBeInTheDocument()
  })

  it('should render correctly with props', () => {
    render(<Default />)
    const Formv4Container = screen.getByTestId('Form_v4-container')
    expect(Formv4Container).toBeInTheDocument()
  })

  it('should render with amount input', () => {
    render(<Default />)
    const amount = screen.getByTestId('amount')
    expect(amount).toBeInTheDocument()

    fireEvent.change(amount, {
      target: { value: Default.args.formInputs.amount },
    })

    expect(amount).toHaveValue('10000')
  })

  it('should render with quantity field', () => {
    render(<Default />)
    const quantity = screen.getByTestId('quantity')
    expect(quantity).toBeInTheDocument()
  })

  it('should render with total field', () => {
    render(<Default />)
    const total = screen.getByTestId('total')
    expect(total).toBeInTheDocument()
  })

  it('should render with submit button', () => {
    render(<Default />)
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(submitButton, {
      target: { value: Default.args.formInputs.buttonLabel },
    })
    expect(submitButton).toHaveValue('Buy the gift card')
  })
})

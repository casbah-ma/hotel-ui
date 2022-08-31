import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Form.stories'

const { Default } = composeStories(stories)

describe('Form_v2 component', () => {
  it('should render correctly', () => {
    render(<Default />)
    const Formv2Container = screen.getByTestId('Formv2-container')
    expect(Formv2Container).toBeInTheDocument()
  })

  it('should render correctly with props', () => {
    render(<Default />)
    const Formv2Container = screen.getByTestId('Formv2-container')
    expect(Formv2Container).toBeInTheDocument()
  })

  it('should render with fullName input', () => {
    render(<Default />)
    const fullName = screen.getByTestId('fullName')
    expect(fullName).toBeInTheDocument()

    fireEvent.change(fullName, {
      target: { value: Default.args.formInputs.fullName },
    })

    expect(fullName).toHaveValue('Test test')
  })

  it('should render with email input', () => {
    render(<Default />)
    const email = screen.getByTestId('email')
    expect(email).toBeInTheDocument()

    fireEvent.change(email, {
      target: { value: Default.args.formInputs.email },
    })
    expect(email).toHaveValue('test@test.com')
  })

  it('should render with message input', () => {
    render(<Default />)
    const message = screen.getByTestId('message')
    expect(message).toBeInTheDocument()

    fireEvent.change(message, {
      target: { value: Default.args.formInputs.message },
    })
    expect(message).toHaveValue('Test message')
  })

  it('should render with submit button', () => {
    render(<Default />)
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(submitButton, {
      target: { value: Default.args.formInputs.buttonLabel },
    })
    expect(submitButton).toHaveValue('Submit')
  })
})

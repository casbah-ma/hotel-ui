import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Contactus.stories'

const { Default } = composeStories(stories)

describe('Contactus component', () => {
  it('should render correctly', () => {
    render(<Default />)
    const contactusContainer = screen.getByTestId('contactus-container')
    expect(contactusContainer).toBeInTheDocument()
  })

  it('should render correctly with props', () => {
    render(<Default />)
    const contactusContainer = screen.getByTestId('contactus-container')
    expect(contactusContainer).toBeInTheDocument()
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
  })
})

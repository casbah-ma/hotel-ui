import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './GuestCard.stories'

const { Default } = composeStories(stories)
const mockedOnMinusClick = jest.fn()
const mockedOnPlusClick = jest.fn()
describe('Guest Card ', () => {
  it('should render the buttons correctly', () => {
    render(
      <Default
        onMinusClick={mockedOnMinusClick}
        onPlusClick={mockedOnPlusClick}
      />
    )
    const DefaultContainer = screen.getByTestId('guest-card-container')
    expect(DefaultContainer).toBeInTheDocument()

    //test minus button
    const minusButton = screen.getByLabelText(
      `decrease ${Default.args.title} amount`
    )
    expect(minusButton).toBeInTheDocument()
    minusButton.click()
    fireEvent.click(minusButton)
    expect(mockedOnMinusClick).toBeCalled()

    const plusButton = screen.getByLabelText(
      `increase ${Default.args.title} amount`
    )
    expect(plusButton).toBeInTheDocument()
    fireEvent.click(plusButton)
    expect(mockedOnPlusClick).toBeCalledTimes(1)
    fireEvent.click(plusButton)
    expect(mockedOnPlusClick).toBeCalledTimes(2)
  })
  it('should render correctly with props', () => {
    render(<Default {...Default.args} />)
    const DefaultContainer = screen.getByTestId('guest-card-container')
    expect(DefaultContainer).toBeInTheDocument()
  })
})

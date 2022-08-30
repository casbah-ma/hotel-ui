import { composeStories } from '@storybook/testing-react'
import * as stories from './BookingBar.stories'

const { Default } = composeStories(stories)
describe('BookingBar ', () => {
  it.todo('should render Large BookingBar')
  // it('should render Medium BookingBar', async () => {
  //     render(<Medium />)
  //     const BookingBar = await screen.findAllByRole('label')
  //     expect(BookingBar).toHaveLength(3)
  // })
  // it('should render Small BookingBar', async () => {
  //     render(<Small />)
  //     const BookingBar = await screen.findAllByRole('button')
  //     expect(BookingBar).toHaveLength(4)
  // })

  // it('Check Guests State', async () => {
  //     render(<Default />)
  //     const handleClick = screen.
  // })
})

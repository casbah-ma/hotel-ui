import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './BookingBar.stories'

const { Default } = composeStories(stories)
describe('BookingBar ', () => {
  it.todo('should render Large BookingBar')
})

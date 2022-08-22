import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Card.stories'

const { Defult_Vertical, Default, HeaderCard } = composeStories(stories)
describe('Card', () => {
  it('should render card Default', async () => {
    render(<Default />)
    const card = await screen.findAllByRole('img')
    expect(card).toHaveLength(1)
  })
  it('should render card Defult_Vertical', async () => {
    render(<Defult_Vertical />)
    const card = await screen.findAllByRole('img')
    expect(card).toHaveLength(1)
  })
})

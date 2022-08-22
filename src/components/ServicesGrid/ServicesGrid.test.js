import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ServicesGrid.stories'

const { Default } = composeStories(stories)

describe('ServicesGrid component', () => {
  it('Renders the correct number of services', () => {
    render(<Default />)
    const services = screen.getAllByTestId('service')
    expect(services).toHaveLength(Default.args.services.length)
  })
})

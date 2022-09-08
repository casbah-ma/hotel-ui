import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ServicesGrid.stories'

const { V1 } = composeStories(stories)

describe('ServicesGrid component', () => {
  it('Renders the correct number of services', () => {
    render(<V1 />)
    const services = screen.getAllByTestId('service')
    expect(services).toHaveLength(V1.args.services.length)
  })
})

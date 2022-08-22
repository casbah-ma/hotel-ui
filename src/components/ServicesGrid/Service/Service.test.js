import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Service.stories'

const { Default } = composeStories(stories)

describe('Service component', () => {
  it('Renders an service', () => {
    render(<Default />)
    const serviceName = screen.getByText(Default.args.serviceName)
    expect(serviceName).toBeInTheDocument()
  })
})

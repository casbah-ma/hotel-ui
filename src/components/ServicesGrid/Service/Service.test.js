import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Service.stories'

const { V1 } = composeStories(stories)

describe('Service component', () => {
  it('Renders an service', () => {
    render(<V1 />)
    const serviceName = screen.getByText(V1.args.serviceName)
    expect(serviceName).toBeInTheDocument()
  })
})

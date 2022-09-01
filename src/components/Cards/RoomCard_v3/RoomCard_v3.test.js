import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './RoomCard_v3.stories'

const { WithImage, WithFreeText } = composeStories(stories)

describe('RoomCard_v3 component', () => {
  it('Renders a header info', () => {
    render(<WithImage />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(WithImage.args.name)
  })

  it('Renders an image and info items when the imageSrc prop is passed', () => {
    render(<WithImage />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    const infoItems = screen.getByRole('list')
    expect(infoItems).toBeInTheDocument()
  })

  it('Does not render an image and info items when the imageSrc prop is NOT passed', () => {
    render(<WithFreeText />)
    const image = screen.queryByRole('img')
    expect(image).not.toBeInTheDocument()
    const infoItems = screen.queryByRole('list')
    expect(infoItems).not.toBeInTheDocument()
  })
})

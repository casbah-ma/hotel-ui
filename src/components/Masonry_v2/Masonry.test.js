// masonry_v2
import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Masonry.stories' // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Default } = composeStories(stories)

//tests
describe('masonry_v2 component', () => {
  it('should render masonry_v2', () => {
    render(<Default />)
    const input = screen.getByTestId('masonry_v2')
    expect(input).toBeInTheDocument()
  })
})

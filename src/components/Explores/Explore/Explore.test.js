// masonry_v2
import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Explore.stories' // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Version1 } = composeStories(stories)

//tests
describe('Explore v2 component', () => {
  it('should render Explore', () => {
    render(<Version1 />)
    const explore = screen.getByTestId('explore')
    expect(explore).toBeInTheDocument()
  })
})

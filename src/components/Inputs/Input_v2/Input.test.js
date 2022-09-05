import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Input.stories' // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Default, TextArea } = composeStories(stories)

//tests
describe('Input component', () => {
  it('should render input', () => {
    render(<Default />)
    const input = screen.getByLabelText(Default.args.placeHolder)
    expect(input).toBeInTheDocument()
  })
  it('Renders a textarea', () => {
    render(<TextArea />)
    const textarea = screen.getByLabelText(TextArea.args.placeHolder)
    expect(textarea).toBeInTheDocument()
  })
})

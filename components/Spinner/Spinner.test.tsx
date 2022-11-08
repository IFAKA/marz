import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders a heading', () => {
    const { container } = render(<Spinner />)

    const spinner = container.firstChild

    expect(spinner).not.toBeEmptyDOMElement()
  })
})

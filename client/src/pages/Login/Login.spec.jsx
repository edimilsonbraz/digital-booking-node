import { render, screen } from "@testing-library/react"
import {Button} from '../../components/Button'
describe('Jest', () => {
  it('Should work', () => {
    expect(1).toBe(1)
  })

  it('Should display elements', () => {
    render(<Button />)

    screen.debug()
  })
})
import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home page', () => {
  it('renders without crashing and shows title or welcome text', () => {
    render(<Home />)
    // Look for any obvious page text; this is tolerant to variations
    expect(
      screen.queryByText(/bonsai|welcome|nanfuen|shop/i)
    ).toBeInTheDocument()
  })
})

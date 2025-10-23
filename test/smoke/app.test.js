import React from 'react'
import { render, screen } from '@testing-library/react'
const path = require('path')
const AppModule = require(path.resolve(__dirname, '..', '..', 'pages', '_app.js'))

describe('_app render smoke test', () => {
  test('renders a child component passed through App', () => {
    const Dummy = () => <div>dummy-child</div>
    const App = AppModule.default
    render(<App Component={Dummy} pageProps={{}} />)
    expect(screen.getByText(/dummy-child/)).toBeInTheDocument()
  })
})

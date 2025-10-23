import React from 'react'
import { render, screen } from '@testing-library/react'

// Mock next/router to provide a pid
jest.mock('next/router', () => ({
  useRouter() {
    return { query: { pid: 'ABC123' } }
  },
}))

const path = require('path')
const ProductPage = require(path.resolve(__dirname, '..', '..', 'pages', 'products', '[pid].js'))

describe('products/[pid] page (smoke)', () => {
  test('renders product id from router query', () => {
    const Component = ProductPage.default
    render(<Component />)
    expect(screen.getByText(/Product: ABC123/)).toBeInTheDocument()
  })
})

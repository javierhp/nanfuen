import { render, screen } from '@testing-library/react'
import ProductCard from '../../components/products/productCard'

const sample = {
  name: 'Oak sapling',
  priceUSD: 29.99,
  hasImage: false,
  code: 'OAK001'
}

test('ProductCard shows name and price', () => {
  render(<ProductCard product={sample} />)
  expect(screen.getByText(/Oak sapling/)).toBeInTheDocument()
  expect(screen.getByText(/29\.99|29.99|\$29.99/)).toBeInTheDocument()
})

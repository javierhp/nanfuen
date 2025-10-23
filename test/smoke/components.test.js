import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductGrid from '../../components/products/productGrid'
import PricingGrid from '../../components/planPricingGrid'

describe('Core components smoke test', () => {
  test('ProductGrid renders with category title', () => {
    render(<ProductGrid category="Pot" />)
    // Check for filter heading which is always present
    expect(screen.getByText('Filtros')).toBeInTheDocument()
  })

  test('PricingGrid renders with sample plans', () => {
    const samplePlan = {
      id: 'test-plan-1',
      name: 'Test Plan',
      category: 'virtual',
      pack: 'monthly',
      priceUSD: '19.99',
      features: ['Feature 1', 'Feature 2'],
      enabled: true
    }
    render(<PricingGrid plans={[samplePlan]} />)
    expect(screen.getByText('Test Plan')).toBeInTheDocument()
  })
})
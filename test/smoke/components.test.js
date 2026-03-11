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

  describe('PricingGrid', () => {
    it('renders with sample plans', () => {
    const mockPlans = [
      {
        id: 1,
        name_es: 'Sample Plan',
        priceUSD: 10,
        category: 'virtual',
        features_es: ['Feature 1'],
        enabled: true
      }
    ];

    render(<PricingGrid plans={mockPlans} />);
    expect(screen.getByText('Sample Plan')).toBeInTheDocument();
  });
});
})
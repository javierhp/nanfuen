import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductGrid from '../../components/products/productGrid';

describe('ProductGrid Component', () => {
  test('renders filter accordion and catalog container', () => {
    render(<ProductGrid category="Pot" />);
    expect(screen.getByText('Filtros')).toBeInTheDocument();
  });
});

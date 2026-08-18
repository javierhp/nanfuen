import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/products/productCard';

describe('ProductCard Component', () => {
  const sample = {
    name: 'Oak sapling',
    priceUSD: 100,
    hasImage: false,
    code: 'OAK001',
    available: 'YES',
    type: 'tree'
  };

  test('shows name and regular price when no discount exists', () => {
    render(<ProductCard product={sample} />);
    expect(screen.getByText('Oak sapling')).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
    expect(screen.queryByText(/% OFF/)).not.toBeInTheDocument();
  });

  test('displays discount badge, strikethrough original price, and discounted price when discount is active', () => {
    const discountedProduct = {
      ...sample,
      priceUSD: 100,
      discountPercentage: 25,
      discountStartDate: '2020-01-01T00:00:00Z',
      discountEndDate: '2099-12-31T23:59:59Z'
    };

    render(<ProductCard product={discountedProduct} />);
    
    // Check discount badge
    expect(screen.getByText('25% OFF')).toBeInTheDocument();
    
    // Check original price (100) and discounted price (75)
    expect(screen.getByText(/\$100\.00|US\$ 100,00|\$100/)).toBeInTheDocument();
    expect(screen.getByText(/\$75\.00|US\$ 75,00|\$75/)).toBeInTheDocument();
  });

  test('does not show discount badge or discounted price when discount is expired', () => {
    const expiredDiscountProduct = {
      ...sample,
      priceUSD: 100,
      discountPercentage: 20,
      discountStartDate: '2020-01-01T00:00:00Z',
      discountEndDate: '2020-12-31T23:59:59Z'
    };

    render(<ProductCard product={expiredDiscountProduct} />);
    expect(screen.queryByText(/20% OFF/)).not.toBeInTheDocument();
    expect(screen.queryByText(/\$80\.00|US\$ 80,00|\$80/)).not.toBeInTheDocument();
    expect(screen.getByText(/\$100\.00|US\$ 100,00|\$100/)).toBeInTheDocument();
  });

  test('renders correctly for sold out product with active discount', () => {
    const soldDiscountedProduct = {
      ...sample,
      available: 'NO',
      priceUSD: 50,
      discountPercentage: 10,
      discountStartDate: '2020-01-01T00:00:00Z',
      discountEndDate: '2099-12-31T23:59:59Z'
    };

    render(<ProductCard product={soldDiscountedProduct} />);
    expect(screen.getByText('10% OFF')).toBeInTheDocument();
    expect(screen.getAllByText(/VENDIDO|SOLD OUT/).length).toBeGreaterThan(0);
  });
});

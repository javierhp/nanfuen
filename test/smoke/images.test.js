import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/products/ProductCard';
import products from '../../public/data/prodcuts.json';

describe('Image Pipeline Smoke Tests', () => {
  describe('Product Images', () => {
    it('renders product images with correct attributes', () => {
      const testProduct = {
        id: 1,
        name: 'Test Product',
        price: 100,
        hasImage: 'YES',
        imageUrl: '/images/test.jpg'
      };
      
      render(<ProductCard product={testProduct} />);

      // Find the product image
      const productImage = screen.getByRole('img');
      
      // Verify image has required attributes
      expect(productImage).toHaveAttribute('src');
      expect(productImage).toHaveAttribute('alt');
    });

    it('handles missing images gracefully', () => {
      const testProduct = { ...products[0], image: undefined };
      render(<ProductCard product={testProduct} />);
      
      // Should render a fallback or placeholder
      const fallbackImage = screen.getByRole('img');
      expect(fallbackImage).toBeInTheDocument();
    });
  });
});
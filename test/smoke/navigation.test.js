import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Catalog from '../../pages/catalog';
import ProductGrid from '../../components/products/productGrid';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock the products data module
jest.mock('../../public/data/prodcuts.json', () => [
  { 
    id: 1, 
    name: 'Test Product', 
    priceARS: 100, 
    type: 'Pot', 
    hasImage: 'YES', 
    code: 'TEST1', 
    available: 'YES' 
  }
]);

describe('Navigation Flow Smoke Tests', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
      query: {},
      pathname: '/catalog',
    }));
  });

  describe('Catalog Navigation', () => {
    it('renders filter section', () => {
      const mockRouter = {
        push: jest.fn(),
        query: {},
        pathname: '/catalog',
      };
      useRouter.mockReturnValue(mockRouter);
      
      render(<Catalog />);
      
      // Verify filter section exists
      expect(screen.getByText('Filtros')).toBeInTheDocument();
      expect(screen.getByText('Categoria')).toBeInTheDocument();
      expect(screen.getByText('En stock')).toBeInTheDocument();
    });
  });

  describe('Product Grid Navigation', () => {
    it('renders products correctly', () => {
        render(<ProductGrid />);
      
      // Verify products are rendered
      const productCards = screen.getAllByRole('article');
      expect(productCards).toHaveLength(1);
      expect(productCards[0]).toHaveTextContent('Test Product');
    });
  });
});
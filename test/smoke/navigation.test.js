import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Catalog from '../../pages/[locale]/catalog';
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
      expect(screen.getByText('Categoría')).toBeInTheDocument();
      expect(screen.getByText('En stock')).toBeInTheDocument();
    });
  });

  describe('Product Grid Navigation', () => {
    it('renders products correctly', async () => {
        render(<ProductGrid />);
      
      // Verify products are rendered (wait for skeleton loading delay)
      expect(await screen.findByText('Test Product', {}, { timeout: 2000 })).toBeInTheDocument();
    });
  });
});
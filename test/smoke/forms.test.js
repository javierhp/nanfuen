import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from '../../components/products/FilterBar';
import PlanSearchBar from '../../components/planSearchBar';

describe('Form Components Smoke Tests', () => {
  describe('FilterBar', () => {
    it('renders filter inputs and responds to changes', () => {
        const mockOnChange = jest.fn();
        const mockFilterState = {
          type: '',
          available: '',
          sortBy: 'price-asc'
        };
        render(<FilterBar filterState={mockFilterState} onFilterChange={mockOnChange} />);
      
      // Verify filter inputs are present
      const typeSelect = screen.getByText('Categoría').nextElementSibling;
      expect(typeSelect).toBeInTheDocument();
      
      // Test type filter interaction
      fireEvent.change(typeSelect, { target: { value: 'Pot' } });
      expect(mockOnChange).toHaveBeenCalled();
    });
  });

  describe('PlanSearchBar', () => {
    it('renders category selector and handles changes', () => {
      render(<PlanSearchBar />);
      
      // Verify category select exists
      const categorySelect = screen.getByText('Categoría:').nextElementSibling;
      expect(categorySelect).toBeInTheDocument();
      
      // Test category selection is present
      expect(screen.getByText('Todos')).toBeInTheDocument();
      expect(screen.getByText('Virtuales')).toBeInTheDocument();
      expect(screen.getByText('Presenciales')).toBeInTheDocument();
    });
  });
});
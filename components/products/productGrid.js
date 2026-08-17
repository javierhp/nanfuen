import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import FilterBar from './FilterBar';
import ProductCard from './productCard';
import ProductCardSkeleton from './ProductCardSkeleton';
import productsData from '../../public/data/prodcuts.json';
import HowToBuy from '../howToBuy';
import { getEffectivePrice } from '../../utils/discount';

const ProductGrid = ({ category }) => {
  function sortBySelection(selection, products) {
    const sorted = [...products];
    switch (selection) {
      case 'price-asc':
        return sorted.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
      case 'price-desc':
        return sorted.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
      case 'name-desc':
        return sorted.sort((a, b) => (a.name > b.name ? -1 : 1));
      case 'name-asc':
      default:
        return sorted.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
  }


  const defaultFilters = {
    type: category,
    available: 'YES',
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'name-asc',
  };

  const [filteredProducts, setFilteredProducts] = useState(
    sortBySelection(
      defaultFilters.sortBy,
      productsData.filter((product) => {
        // Check if the product type matches the selected product type filter
        if (defaultFilters.type && product.type !== defaultFilters.type) {
          return false;
        }

        // Check if the product availability matches the selected product availability filter
        if (defaultFilters.available && product.available !== defaultFilters.available) {
          return false;
        }

        // Return true if the product passes all filter checks
        return true;
      })
    )
  );

  const [filterState, setFilterState] = useState(defaultFilters);

  const handleFilterChange = (filters) => {
    // Update the state with the new filter values
    setFilterState(filters);

    // Filter the products array based on the new filter values
    var filteredProducts = productsData.filter((product) => {
      // Check if the product type matches the selected product type filter
      if (filters.type && product.type !== filters.type) {
        return false;
      }

      // Check if the product availability matches the selected product availability filter
      if (
        filters.available &&
        filters.available !== 'all' &&
        product.available !== filters.available
      ) {
        return false;
      }

      // Check if the product price is within the selected price range filter
      // if (
      //     (parseFloat(product.priceARS) > filters.maxPrice ||
      //         parseFloat(product.priceARS) < filters.minPrice)
      // ) {
      //     return false;
      // }

      // Return true if the product passes all filter checks
      return true;
    });

    filteredProducts = sortBySelection(filters.sortBy, filteredProducts);

    // Update the state with the filtered products array
    setFilteredProducts(filteredProducts);
  };

  const handleResetFilters = () => {
    handleFilterChange(defaultFilters);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [filterState]);

  return (
    <Container>
      <Accordion defaultActiveKey="0" style={{ marginBottom: 'var(--space-6)' }}>
        <Accordion.Item 
          eventKey="0"
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <Accordion.Header>Filtros</Accordion.Header>
          <Accordion.Body style={{ backgroundColor: 'var(--color-surface)' }}>
            <FilterBar
              filterState={filterState}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
            <HowToBuy />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Row 
        xs={1} 
        md={2} 
        lg={3} 
        style={{ 
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-8)'
        }}
      >
        {isLoading ? (
          // Show skeleton loading state
          Array.from({ length: 6 }).map((_, index) => (
            <Col key={`skeleton-${index}`}>
              <ProductCardSkeleton />
            </Col>
          ))
        ) : (
          // Show actual products
          filteredProducts
            .filter(product => product.hasImage !== 'NO')
            .map((product) => (
              <Col key={product.code}>
                <ProductCard product={product} />
              </Col>
            ))
        )}
      </Row>

      {!isLoading && filteredProducts.length === 0 && (
        <div 
          style={{
            textAlign: 'center',
            padding: 'var(--space-8)',
            color: 'var(--color-text-light)'
          }}
        >
          No se encontraron productos que coincidan con los filtros seleccionados.
        </div>
      )}
    </Container>
  );
};

ProductGrid.propTypes = {
  category: PropTypes.oneOf(['Pot', 'tree', 'tools'])
};

export default ProductGrid;

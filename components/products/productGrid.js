import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import productsData from '../../public/data/prodcuts.json';

const ProductGrid = ({category}) => {
    const defaultFilters = {
        type: category,
        available: "YES",
        minPrice: 0,
        maxPrice: 1000
    };

    const [filteredProducts, setFilteredProducts] = useState(productsData.filter((product) => {
        // Check if the product type matches the selected product type filter
        if (defaultFilters.type && product.type !== defaultFilters.type) {
            return false;
        }

        // Check if the product availability matches the selected product availability filter
        if ((defaultFilters.available) && product.available !== defaultFilters.available) {
            return false;
        }

        // Return true if the product passes all filter checks
        return true;
    }));
    
    const [filterState, setFilterState] = useState(defaultFilters);

    const handleFilterChange = (filters) => {

        // Update the state with the new filter values
        setFilterState(filters);

        // Filter the products array based on the new filter values
        const filteredProducts = productsData.filter((product) => {
            // Check if the product type matches the selected product type filter
            if (filters.type && product.type !== filters.type) {
                return false;
            }

            // Check if the product availability matches the selected product availability filter
            if ((filters.available && filters.available !== "all") && product.available !== filters.available) {
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

        // Update the state with the filtered products array
        setFilteredProducts(filteredProducts);
    };

    const handleResetFilters = () => {
        console.log("reset filters");
    };

    return (
        <Container>
            <Row>
                <Col>
                    <FilterBar filterState={filterState} onFilterChange={handleFilterChange} onResetFilters={handleResetFilters} />
                    <p></p>
                </Col>
            </Row>
            <Row>
                {filteredProducts.map((product) => (
                    <>{
                        product.hasImage !== "NO" &&
                        <Col key={product.code} xs={12} md={6}>
                            <ProductCard product={product} />
                        </Col>
                    }</>
                ))}
            </Row>
        </Container>
    );
};

export default ProductGrid;

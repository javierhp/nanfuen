import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const FilterBar = ({ onFilterChange, onPriceChange, onResetFilters, filterState }) => {
    const onTypeFilterChange = (e) => {
        const newFilters = {
            type: e.target.value,
            available: filterState.available,
            minPrice: filterState.minPrice,
            maxPrice: filterState.maxPrice
        };
        onFilterChange(newFilters);
    };
    const onAvailableFilterChange = (e) => {
        const newFilters = {
            type: filterState.type,
            available: e.target.value,
            minPrice: filterState.minPrice,
            maxPrice: filterState.maxPrice
        };
        onFilterChange(newFilters);
    };

    return (
        <Form>
            <Row>
                <Col md={3}>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" name="type" onChange={onTypeFilterChange} defaultValue={filterState.type}>
                        <option value="">All</option>
                        <option value="Pot">Pot</option>
                        <option value="tree">Tree</option>
                    </Form.Control>
                </Col>
                <Col md={3}>
                    <Form.Label>Available</Form.Label>
                    <Form.Control as="select" name="available" onChange={onAvailableFilterChange} defaultValue={filterState.available}>
                        <option value="">All</option>
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>
                    </Form.Control>
                </Col>
                <Col md={6}>
                    <Form.Label>Price Range</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Min"
                                name="minPrice"
                                onChange={onPriceChange}
                                defaultValue={filterState.minPrice}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Max"
                                name="maxPrice"
                                onChange={onPriceChange}
                                defaultValue={filterState.maxPrice}
                            />
                        </Col>
                        <Col>
                            <Button onClick={onResetFilters}>Reset Filters</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export default FilterBar;

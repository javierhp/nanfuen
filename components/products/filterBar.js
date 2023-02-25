import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const FilterBar = ({ onFilterChange, onResetFilters, filterState }) => {
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
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" name="type" onChange={onTypeFilterChange} defaultValue={filterState.type}>
                        <option value="">Todas</option>
                        <option value="Pot">Macetas</option>
                        <option value="tree">Arboles</option>
                    </Form.Control>
                </Col>
                <Col md={3}>
                    <Form.Label>En stock</Form.Label>
                    <Form.Control as="select" name="available" onChange={onAvailableFilterChange} defaultValue={filterState.available}>
                        <option value="">Todos</option>
                        <option value="YES">Si</option>
                        <option value="NO">No</option>
                    </Form.Control>
                </Col>
                {/* <Col md={6}>
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
                </Col> */}
            </Row>
        </Form>
    );
};

export default FilterBar;

import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const FilterBar = ({ onFilterChange, onResetFilters, filterState }) => {
    const [filters, setFilters] = useState(filterState);

    useEffect(() => {
        console.log("called");
        setFilters(filterState);
    }, [filterState]);

    const onTypeFilterChange = (e) => {
        const newFilters = {
            ...filterState,
            type: e.target.value
        };
        onFilterChange(newFilters);
    };
    const onAvailableFilterChange = (e) => {
        const newFilters = {
            ...filterState,
            available: e.target.value
        };
        onFilterChange(newFilters);
    };
    const onSortChange = (e) => {
        const newFilters = {
            ...filterState,
            sortBy: e.target.value
        };
        onFilterChange(newFilters);
    };
    const handleResetFilters = () => {
        onResetFilters();
    };

    return (
        <Form>
            <Row className="mb-2">
                <Col md={4}>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" name="type" onChange={onTypeFilterChange} value={filters.type}>
                        <option value="">Todas</option>
                        <option value="Pot">Macetas</option>
                        <option value="tree">Arboles</option>
                    </Form.Control>
                </Col>
                <Col md={4}>
                    <Form.Label>En stock</Form.Label>
                    <Form.Control as="select" name="available" onChange={onAvailableFilterChange} value={filters.available}>
                        <option value="">Todos</option>
                        <option value="YES">Si</option>
                        <option value="NO">No</option>
                    </Form.Control>
                </Col>
                <Col md={4}>
                    <Form.Label>Ordenar por</Form.Label>
                    <Form.Control as="select" name="sortBy" onChange={onSortChange} value={filters.sortBy}>
                        <option value="price-asc">Precio menor a mayor</option>
                        <option value="price-desc">Precio mayor a menor</option>
                        <option value="name-asc">Nombre A-Z</option>
                        <option value="name-desc">Nombre Z-A</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <Button variant="secondary" onClick={handleResetFilters}>Reiniciar filtros</Button>
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
                    </Row>
                </Col> */}
            </Row>
        </Form>
    );
};

export default FilterBar;

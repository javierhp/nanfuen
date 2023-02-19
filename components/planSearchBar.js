import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PlanSearchBar = ({ plans, setFilteredPlans }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortByPrice, setSortByPrice] = useState(false);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        filterPlans(e.target.value, sortByPrice);
    };

    const handleSortByPriceChange = (e) => {
        setSortByPrice(e.target.checked);
        filterPlans(selectedCategory, e.target.checked);
    };

    const filterPlans = (category, sort) => {
        let filtered = plans;
        if (category !== 'all') {
            filtered = plans.filter((plan) => plan.category === category);
        }
        if (sort) {
            filtered.sort((a, b) => a.price - b.price);
        }
        setFilteredPlans(filtered);
    };

    return (
        <Form>
            <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">All</option>
                    <option value="virtual">Virtual</option>
                    <option value="in person">In Person</option>
                </Form.Control>
            </Form.Group>

            <div className="plan-search-bar__sort">
                <label htmlFor="sort-toggle">Sort by price:</label>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="sort-toggle"
                        checked={sortByPrice}
                        onChange={handleSortByPriceChange}
                    />
                </div>
            </div>
        </Form>
    );
};

export default PlanSearchBar;

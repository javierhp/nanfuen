import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
        <Form.Label>Categoria:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Todos</option>
          <option value="virtual">Virtuales</option>
          <option value="in person">Presenciales</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

PlanSearchBar.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      price: PropTypes.number
    })
  ).isRequired,
  setFilteredPlans: PropTypes.func.isRequired
};

export default PlanSearchBar;

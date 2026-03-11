import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from './i18n/LanguageContext';

const PlanSearchBar = ({ plans, setFilteredPlans }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { locale } = useLanguage();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterPlans(e.target.value, false);
  };

  const filterPlans = (category, sort) => {
    let filtered = plans;
    if (category !== 'all') {
      filtered = plans.filter((plan) => plan.category === category);
    }
    setFilteredPlans(filtered);
  };

  return (
    <div style={{ marginBottom: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
      <label htmlFor="category" style={{ 
        display: 'block', 
        marginBottom: 'var(--space-2)', 
        color: 'var(--color-text-muted)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {locale === 'en' ? 'Category:' : 'Categoría:'}
      </label>
      <select 
        id="category" 
        value={selectedCategory} 
        onChange={handleCategoryChange}
        style={{
          width: '100%',
          maxWidth: '300px',
          padding: 'var(--space-2) var(--space-4)',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          fontSize: '1rem',
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer'
        }}
      >
        <option value="all">{locale === 'en' ? 'All' : 'Todos'}</option>
        <option value="virtual">{locale === 'en' ? 'Virtual' : 'Virtuales'}</option>
        <option value="in person">{locale === 'en' ? 'In Person' : 'Presenciales'}</option>
      </select>
    </div>
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

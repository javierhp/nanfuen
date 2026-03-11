import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../i18n/LanguageContext';

const FilterBar = ({ onFilterChange, onResetFilters, filterState }) => {
  const [filters, setFilters] = useState(filterState);
  const { locale } = useLanguage();

  useEffect(() => {
    setFilters(filterState);
  }, [filterState]);

  const onTypeFilterChange = (e) => {
    const newFilters = { ...filterState, type: e.target.value };
    onFilterChange(newFilters);
  };
  
  const onAvailableFilterChange = (e) => {
    const newFilters = { ...filterState, available: e.target.value };
    onFilterChange(newFilters);
  };
  
  const onSortChange = (e) => {
    const newFilters = { ...filterState, sortBy: e.target.value };
    onFilterChange(newFilters);
  };

  const selectStyle = {
    width: '100%',
    padding: 'var(--space-2) var(--space-4)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius)',
    fontSize: '0.95rem',
    outline: 'none',
    appearance: 'none',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B949E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    backgroundSize: '1em'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: 'var(--space-2)',
    color: 'var(--color-text-muted)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  return (
    <div style={{
      backgroundColor: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--border-radius)',
      padding: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-6)'
      }}>
        {/* Category */}
        <div>
          <label style={labelStyle}>{locale === 'en' ? 'Category' : 'Categoría'}</label>
          <select style={selectStyle} onChange={onTypeFilterChange} value={filters.type}>
            <option value="">{locale === 'en' ? 'All' : 'Todas'}</option>
            <option value="Pot">{locale === 'en' ? 'Pots' : 'Macetas'}</option>
            <option value="tree">{locale === 'en' ? 'Trees' : 'Árboles'}</option>
            <option value="Tools">{locale === 'en' ? 'Tools' : 'Herramientas'}</option>
          </select>
        </div>

        {/* In Stock */}
        <div>
          <label style={labelStyle}>{locale === 'en' ? 'Availability' : 'Disponibilidad'}</label>
          <select style={selectStyle} onChange={onAvailableFilterChange} value={filters.available}>
            <option value="">{locale === 'en' ? 'All' : 'Todos'}</option>
            <option value="YES">{locale === 'en' ? 'In Stock' : 'En stock'}</option>
            <option value="NO">{locale === 'en' ? 'Sold Out' : 'Vendido'}</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label style={labelStyle}>{locale === 'en' ? 'Sort by' : 'Ordenar por'}</label>
          <select style={selectStyle} onChange={onSortChange} value={filters.sortBy}>
            <option value="price-asc">{locale === 'en' ? 'Price: Low to High' : 'Precio: Menor a Mayor'}</option>
            <option value="price-desc">{locale === 'en' ? 'Price: High to Low' : 'Precio: Mayor a Menor'}</option>
            <option value="name-asc">{locale === 'en' ? 'Name: A-Z' : 'Nombre: A-Z'}</option>
            <option value="name-desc">{locale === 'en' ? 'Name: Z-A' : 'Nombre: Z-A'}</option>
          </select>
        </div>
      </div>
      
      <div style={{ marginTop: 'var(--space-6)', display: 'flex' }}>
        <button
          className="btn btn-secondary"
          onClick={onResetFilters}
          style={{ width: '100%', maxWidth: '200px', cursor: 'pointer' }}
        >
          {locale === 'en' ? 'Reset Filters' : 'Reiniciar filtros'}
        </button>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
  filterState: PropTypes.object.isRequired
};

export default FilterBar;

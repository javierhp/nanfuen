import React from 'react';
import PropTypes from 'prop-types';

import { useLanguage } from '../i18n/LanguageContext';

function TreeDetails({ product }) {
  const { locale } = useLanguage();
  return (
    <ul>
      <li key={`with${product.tree_width}`}>
        <strong>{locale === 'en' ? 'Width:' : 'Ancho:'}</strong> {product.tree_width} CM
      </li>
      <li key={`hight${product.tree_height}`}>
        <strong>{locale === 'en' ? 'Height:' : 'Alto:'}</strong> {product.tree_height} CM
      </li>
    </ul>
  );
}

TreeDetails.propTypes = {
  product: PropTypes.shape({
    tree_width: PropTypes.string.isRequired,
    tree_height: PropTypes.string.isRequired
  }).isRequired
};

export default TreeDetails;

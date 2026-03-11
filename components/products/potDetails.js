import React from 'react';
import PropTypes from 'prop-types';

import { useLanguage } from '../i18n/LanguageContext';

function PotDetails({ product }) {
  const { locale } = useLanguage();
  return (
    <ul>
      <li key={`Forma${product.potShape}`}>
        <strong>{locale === 'en' ? 'Shape:' : 'Forma:'}</strong> {product.potShape}
      </li>
      <li key={`Color${product.potShape}`}>
        <strong>{locale === 'en' ? 'Color:' : 'Color:'}</strong> {product.color}
      </li>
      <li key={`Autor${product.potShape}`}>
        <strong>{locale === 'en' ? 'Author:' : 'Autor:'}</strong> {product.author}
      </li>
      <li key={`Tamaño${product.potShape}`}>
        <strong>{locale === 'en' ? 'Size (CM):' : 'Tamaño (CM):'}</strong> {product.potSize}
      </li>
    </ul>
  );
}

PotDetails.propTypes = {
  product: PropTypes.shape({
    potShape: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    potSize: PropTypes.string.isRequired
  }).isRequired
};

export default PotDetails;

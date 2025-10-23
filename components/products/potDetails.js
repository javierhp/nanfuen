import React from 'react';
import PropTypes from 'prop-types';

function PotDetails({ product }) {
  return (
    <ul>
      <li key={`Forma${product.potShape}`}>
        <strong>Forma:</strong> {product.potShape}
      </li>
      <li key={`Color${product.potShape}`}>
        <strong>Color:</strong> {product.color}
      </li>
      <li key={`Autor${product.potShape}`}>
        <strong>Autor:</strong> {product.author}
      </li>
      <li key={`Tamaño${product.potShape}`}>
        <strong>Tamaño (CM):</strong> {product.potSize}
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

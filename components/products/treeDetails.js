import React from 'react';
import PropTypes from 'prop-types';

function TreeDetails({ product }) {
  return (
    <ul>
      <li key={`with${product.tree_width}`}>
        <strong>Ancho:</strong> {product.tree_width} CM
      </li>
      <li key={`hight${product.tree_height}`}>
        <strong>Alto:</strong> {product.tree_height} CM
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

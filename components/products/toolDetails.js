import React from 'react';
import PropTypes from 'prop-types';

function ToolDetails({ product }) {
  return (
    <ul>
      <li>test</li>
      {/* <li key={`Forma${product.potShape}`}>
        <strong>Forma:</strong> {product.potShape}
      </li> */}
    </ul>
  );
}

ToolDetails.propTypes = {
  product: PropTypes.shape({
    // Add specific tool properties when they are implemented
    type: PropTypes.string.isRequired
  }).isRequired
};

export default ToolDetails;

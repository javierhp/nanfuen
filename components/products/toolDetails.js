import React from 'react';
import PropTypes from 'prop-types';

function ToolDetails({ product }) {
  return null;
}

ToolDetails.propTypes = {
  product: PropTypes.shape({
    // Add specific tool properties when they are implemented
    type: PropTypes.string.isRequired
  }).isRequired
};

export default ToolDetails;

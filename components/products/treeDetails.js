import React from "react";

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

export default TreeDetails;

import React from "react";

function TreeDetails({ product }) {
  return (
    <ul>
      <li>
        <strong>Ancho:</strong> {product.tree_width} CM
      </li>
      <li>
        <strong>Alto:</strong> {product.tree_height} CM
      </li>
    </ul>
  );
}

export default TreeDetails;

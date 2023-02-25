import React from "react";

function PotDetails({ product }) {
  return (
    <ul>
      <li>
        <strong>Forma:</strong> {product.potShape}
      </li>
      <li>
        <strong>Tamaño:</strong> {product.potSize}
      </li>
      <li>
        <strong>Color:</strong> {product.color}
      </li>
      <li>
        <strong>Autor:</strong> {product.author}
      </li>
      <li>
        <strong>Tamaño (CM):</strong> {product.potSize}
      </li>
    </ul>
  );
}

export default PotDetails;

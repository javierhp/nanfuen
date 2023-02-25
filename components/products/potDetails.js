import React from "react";

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

export default PotDetails;

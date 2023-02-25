import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`/images/catalog/${product.code}.jpg`} />
      <Card.Body>
        <Card.Title>{product.name} {product.available === 'NO' && <text className="text-muted">vendido</text>}</Card.Title>
        <Card.Text style={{ width: '18rem', textDecoration: product.available === 'NO' ? 'line-through' : 'none' }}>
          {product.priceARS && <text>Precio: {parseFloat(product.priceARS).toFixed(0)}$</text>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

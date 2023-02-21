import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`/images/${product.code}.jpg`} />
      <Card.Body>
        <Card.Title>{product.name} {product.available === 'NO' && <text className="text-muted">vendido</text>}</Card.Title>
        <Card.Text style={{ width: '18rem', textDecoration: product.available === 'NO' ? 'line-through' : 'none' }}>
          {product.priceARS && <text>Precio en ARS: {product.priceARS}</text>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <>{
      product.hasImage !== "NO" &&
      <Card>
        <Card.Img variant="top" src={product.hasImage !== "NO" ? `/images/catalog/${product.code}.jpg` : ''} alt="SIN IMAGEN" />
        <Card.Body>
          <Card.Title>
            {product.available === 'NO' && <span className="text-muted">[VENDIDO]</span>}
            {product.name}
          </Card.Title>
          <Card.Text style={{ width: '18rem', textDecoration: product.available === 'NO' ? 'line-through' : 'none' }}>
            {product.priceARS && <text>Precio: {parseFloat(product.priceARS).toFixed(0)}$</text>}
          </Card.Text>
        </Card.Body>
      </Card>
    }
    </>
  );
};

export default ProductCard;

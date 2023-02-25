import { React, useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import PotDetails from './PotDetails';
import TreeDetails from './treeDetails';

const ProductCard = ({ product }) => {
  const [sold, setSold] = useState(product.available === "NO");

  return (
    <Card className={`product-card ${sold ? 'sold' : ''}`}>
      <div className="product-image">
        <Card.Img variant="top" src={product.hasImage !== "NO" ? `/images/catalog/${product.code}.jpg` : ''} alt="SIN IMAGEN" />
        {sold && (
          <div className="sold-overlay">Vendido</div>
        )}
      </div>
      <Card.Body>
        <Card.Title>
          {product.available === 'NO' && <Badge>VENDIDO</Badge>}
          {product.name}
        </Card.Title>
        <Card.Text style={{ width: '18rem', textDecoration: product.available === 'NO' ? 'line-through' : 'none' }}>
          {product.priceARS && <text>Precio: AR${parseFloat(product.priceARS).toFixed(0)}</text>}
        </Card.Text>
        <div>
          {product.type === "Pot" && <PotDetails product={product} />}
          {product.type === "tree" && <TreeDetails product={product} />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

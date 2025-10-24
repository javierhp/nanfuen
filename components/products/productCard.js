import { React, useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PotDetails from './PotDetails';
import TreeDetails from './treeDetails';
import ToolDetails from './toolDetails';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  const [sold, setSold] = useState(product.available === 'NO');
  
  return (
    <Card 
      className={`${styles.card} ${sold ? styles.soldCard : ''}`} 
      role="article"
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: '#83A8FF',
        opacity: 0.3
      }} />
      
      <div className={styles.productImage}>
        <Card.Img
          variant="top"
          src={product.hasImage !== 'NO' ? `/images/catalog/${product.code}.jpg` : ''}
          alt={product.hasImage !== 'NO' ? `Imagen de ${product.name}` : 'Imagen no disponible'}
          className={sold ? styles.soldImage : ''}
        />
        {sold && (
          <div className={styles.soldOverlay}>
            Vendido
          </div>
        )}
      </div>
      
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>
          {product.available === 'NO' && (
            <Badge className={styles.soldBadge}>
              VENDIDO
            </Badge>
          )}
          <span className={sold ? 'text-muted' : 'accent-gradient'}>
            {product.name}
          </span>
        </Card.Title>
        
        {product.priceUSD && (
          <Card.Text className={sold ? styles.priceTextSold : styles.priceText}>
            {Number(product.priceUSD).toLocaleString('es-AR', {
              style: 'currency',
              currency: 'USD',
            })}
          </Card.Text>
        )}
        
        <div className={styles.details}>
          {product.type === 'Pot' && <PotDetails product={product} />}
          {product.type === 'tree' && <TreeDetails product={product} />}
          {product.type === 'tools' && <ToolDetails product={product} />}
        </div>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    available: PropTypes.oneOf(['YES', 'NO']).isRequired,
    hasImage: PropTypes.oneOf(['YES', 'NO']),
    code: PropTypes.string,
    name: PropTypes.string.isRequired,
    priceUSD: PropTypes.number,
    type: PropTypes.oneOf(['Pot', 'tree', 'tools']).isRequired
  }).isRequired
};

export default ProductCard;

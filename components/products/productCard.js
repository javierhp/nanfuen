import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PotDetails from './PotDetails';
import TreeDetails from './treeDetails';
import ToolDetails from './toolDetails';
import styles from './productCard.module.css';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';

const ProductCard = ({ product }) => {
  const { locale } = useLanguage();
  const sold = product.available === 'NO';
  const soldText = locale === 'en' ? 'SOLD OUT' : 'VENDIDO';
  
  return (
    <div className={`${styles.card} ${sold ? styles.soldCard : ''}`} role="article">
      <div className={styles.imageWrapper}>
        {product.hasImage !== 'NO' ? (
          <img
            src={`/images/catalog/${product.code}.jpg`}
            alt={`${product.name}`}
            className={`${styles.image} ${sold ? styles.soldImage : ''}`}
            loading="lazy"
          />
        ) : (
          <div className={styles.noImage}>
            {locale === 'en' ? 'No image' : 'Sin imagen'}
          </div>
        )}
        {sold && (
          <div className={styles.soldBadgeImage}>
            {soldText}
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>
            {product.name}
          </h3>
          {sold && <span className={styles.soldBadgeInline}>{soldText}</span>}
        </div>
        
        {product.priceUSD && (
          <p className={styles.price}>
            {Number(product.priceUSD).toLocaleString(locale === 'en' ? 'en-US' : 'es-AR', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        )}
        
        <div className={styles.details}>
          {product.type === 'Pot' && <PotDetails product={product} />}
          {product.type === 'tree' && <TreeDetails product={product} />}
          {product.type === 'Tools' && <ToolDetails product={product} />}
        </div>
      </div>
    </div>
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

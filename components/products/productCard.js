import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PotDetails from './PotDetails';
import TreeDetails from './treeDetails';
import ToolDetails from './toolDetails';
import styles from './productCard.module.css';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';
import { isDiscountActive, getDiscountPercentage, getDiscountedPrice } from '../../utils/discount';

const ProductCard = ({ product }) => {
  const { locale } = useLanguage();
  const sold = product?.available === 'NO';
  const soldText = locale === 'en' ? 'SOLD OUT' : 'VENDIDO';

  const hasDiscount = isDiscountActive(product);
  const discountPercentage = hasDiscount ? getDiscountPercentage(product) : 0;
  const discountedPrice = hasDiscount ? getDiscountedPrice(product) : null;
  const discountBadgeText = `${discountPercentage}% OFF`;
  
  return (
    <div className={`${styles.card} ${sold ? styles.soldCard : ''}`} role="article">
      <div className={styles.imageWrapper}>
        {product?.hasImage !== 'NO' ? (
          <img
            src={`/images/catalog/${product?.code}.jpg`}
            alt={`${product?.name || ''}`}
            className={`${styles.image} ${sold ? styles.soldImage : ''}`}
            loading="lazy"
          />
        ) : (
          <div className={styles.noImage}>
            {locale === 'en' ? 'No image' : 'Sin imagen'}
          </div>
        )}
        {hasDiscount && (
          <div className={styles.discountBadge}>
            {discountBadgeText}
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
            {product?.name}
          </h3>
          {sold && <span className={styles.soldBadgeInline}>{soldText}</span>}
        </div>
        
        {product?.priceUSD && (
          <div className={styles.priceContainer}>
            {hasDiscount && discountedPrice !== null ? (
              <>
                <p className={styles.discountedPrice}>
                  {Number(discountedPrice).toLocaleString(locale === 'en' ? 'en-US' : 'es-AR', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
                <p className={styles.originalPrice}>
                  {Number(product.priceUSD).toLocaleString(locale === 'en' ? 'en-US' : 'es-AR', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </>
            ) : (
              <p className={styles.price}>
                {Number(product.priceUSD).toLocaleString(locale === 'en' ? 'en-US' : 'es-AR', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
            )}
          </div>
        )}
        
        <div className={styles.details}>
          {product?.type === 'Pot' && <PotDetails product={product} />}
          {product?.type === 'tree' && <TreeDetails product={product} />}
          {product?.type === 'Tools' && <ToolDetails product={product} />}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    available: PropTypes.oneOf(['YES', 'NO']),
    hasImage: PropTypes.oneOfType([PropTypes.oneOf(['YES', 'NO']), PropTypes.bool]),
    code: PropTypes.string,
    name: PropTypes.string.isRequired,
    priceUSD: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(['Pot', 'tree', 'Tools', 'tools']),
    discountPercentage: PropTypes.number,
    discountStartDate: PropTypes.string,
    discountEndDate: PropTypes.string
  }).isRequired
};

export default ProductCard;


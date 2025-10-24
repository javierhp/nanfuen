import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCardSkeleton = () => {
  const shimmerAnimation = {
    animation: 'shimmer 1.5s infinite linear',
    background: 'linear-gradient(90deg, var(--color-surface) 0%, #f0f0f0 50%, var(--color-surface) 100%)',
    backgroundSize: '200% 100%'
  };

  const shimmerStyles = {
    '@keyframes shimmer': {
      '0%': {
        backgroundPosition: '200% 0'
      },
      '100%': {
        backgroundPosition: '-200% 0'
      }
    }
  };

  return (
    <Card style={{
      height: '100%',
      backgroundColor: 'var(--color-background)',
      border: '1px solid var(--color-border)',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '200px',
        backgroundColor: 'var(--color-surface)',
        ...shimmerAnimation
      }} />
      
      <Card.Body style={{ 
        padding: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }}>
        <div style={{
          height: '24px',
          width: '80%',
          borderRadius: '4px',
          ...shimmerAnimation
        }} />
        
        <div style={{
          height: '20px',
          width: '40%',
          borderRadius: '4px',
          ...shimmerAnimation
        }} />
        
        <div style={{
          marginTop: 'var(--space-3)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)'
        }}>
          <div style={{
            height: '16px',
            width: '60%',
            borderRadius: '4px',
            ...shimmerAnimation
          }} />
          <div style={{
            height: '16px',
            width: '70%',
            borderRadius: '4px',
            ...shimmerAnimation
          }} />
        </div>
      </Card.Body>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </Card>
  );
};

export default ProductCardSkeleton;
import { Container, Row, Col } from 'react-bootstrap';
import { PlanCard } from './planPricingCard';
import PropTypes from 'prop-types';

export default function PricingGrid({ plans }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 'var(--space-6)',
      alignItems: 'stretch'
    }}>
      {plans.map((plan, i) => (
        <div key={i}>
          <PlanCard plan={plan} />
        </div>
      ))}
    </div>
  );
}

PricingGrid.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      priceInUSD: PropTypes.number,
      priceInARS: PropTypes.number,
      category: PropTypes.string,
      pack: PropTypes.string,
      enabled: PropTypes.bool,
      features: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

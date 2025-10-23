import { Container, Row, Col } from 'react-bootstrap';
import { PlanCard } from './planPricingCard';
import PropTypes from 'prop-types';

export default function PricingGrid({ plans }) {
  return (
    <Container>
      <Row xs={1} sm={1} md={2} lg={3}>
        {plans.map((plan) => (
          <Col key={plan.id} className="mb-4">
            <PlanCard plan={plan} />
          </Col>
        ))}
      </Row>
    </Container>
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

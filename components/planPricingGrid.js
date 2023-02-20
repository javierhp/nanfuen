import { Container, Row, Col } from 'react-bootstrap';
import { PlanCard } from './planPricingCard';

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

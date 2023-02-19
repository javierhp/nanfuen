import { Card, Button } from 'react-bootstrap';

export function PlanCard({ plan }) {
  const { name, description, priceInUSD, priceInARS, category, pack, enabled } = plan;

  return (
    <Card style={{ width: '18rem', textDecoration: plan.enabled ? 'none' : 'line-through' }} key={plan.name}>
      <Card.Header>{plan.name}</Card.Header>
      <Card.Body>
        <Card.Title>{plan.price}</Card.Title>
        {plan.priceUSD && <p>Precio en USD: {plan.priceUSD}</p>}
        {plan.priceARS && <p>Precio en ARS: {plan.priceARS}</p>}
        {plan.category === 'virtual' && (
          <p>
            Pack: {plan.pack} - {plan.pack === 'monthly' ? '1 mes' : `${plan.pack} meses`}
          </p>
        )}
        {plan.category === 'in person' && <p>Tipo: {plan.type}</p>}
        <ul>
          {plan.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Button variant="primary" disabled={!plan.enabled}>
          {plan.enabled ? 'Inscribirse' : 'No disponible'}
        </Button>
      </Card.Body>
    </Card>
  );
}

import { Card, Button } from 'react-bootstrap';

export function PlanCard({ plan }) {
  const { name, description, priceInUSD, priceInARS, category, pack, enabled } = plan;

  return (
    <Card style={{ width: '18rem', textDecoration: plan.enabled ? 'none' : 'line-through' }} key={plan.name}>
      <Card.Header>{plan.name}</Card.Header>
      <Card.Body>
        <Card.Title>{plan.pack}</Card.Title>
        {plan.priceUSD && <p>Precio en USD: {plan.priceUSD}</p>}
        {plan.priceARS && <p>Precio en Pesos Argentinos: {plan.priceARS}</p>}
        {plan.category && <p>Tipo: {plan.category === "in person"? "Presenciales": "Virtuales"}</p>}
        <ul>
          {plan.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {
          plan.category !== "in person" && 
          <Button variant="primary" disabled={!plan.enabled} href='https://forms.gle/KKtXu8vW3k6s1fF57'>
            {plan.enabled ? 'Inscribirse' : 'No disponible'}
          </Button>
        }
        {
          plan.category === "in person" && 
          <Button variant="primary" disabled={!plan.enabled}>
            {plan.enabled ? 'Escribinos por mail' : 'No disponible'}
          </Button>
        }
      </Card.Body>
    </Card>
  );
}

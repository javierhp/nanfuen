import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

function HowToBuy({ product }) {
  return (
    <Row>
      <Col>
        <h5>Los precios se calculan con la cotizacion 'blue' del dolar</h5>
        <h5>Para comprar escribinos a nanfuen.bonsai@gmail.com con el / los productos que te gustaria adquirir</h5>
      </Col>
    </Row>
  );
}

export default HowToBuy;

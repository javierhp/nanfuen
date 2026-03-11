import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function HowToBuy({ product }) {
  return (
    <Row>
      <Col>
        <h5 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          Los precios se calculan con la cotizacion &#39;blue&#39; del dolar
          Para comprar escribinos a nanfuen.bonsai@gmail.com con el / los productos que te
          gustaria adquirir
        </h5>
      </Col>
    </Row>
  );
}

HowToBuy.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number
  })
};

export default HowToBuy;

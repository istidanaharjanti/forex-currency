import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';

import './boxCurrency.css'

const BoxCurrency = ({ currency, result, currencyName, rate, children }) => (
      <Row>
        <Card className="box-currency" >
          <Card.Body>
            <Row>
            <Col md={10}>
              <Row>
                <Col className="text-currency">{currency}</Col>
                <Col className="text-currency value">{result}</Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-static currency">{currencyName}</p>
                  <p className="text-static">1 USD = {rate}</p>
                </Col>
              </Row>
            </Col>
            <Col md={2} style={{ alignSelf:'center' }}>
              { children }
            </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
  );
  
  BoxCurrency.propTypes = {
    currency: PropTypes.string,
    result: PropTypes.number,
    currencyName: PropTypes.string,
    rate: PropTypes.string,
  };
  
  BoxCurrency.defaultProps = {
    currency: 'IDR',
    result: 0,
    currencyName: 'IDR - Indonesian Rupiah',
    rate: 'IDR 14,410.45'
  };
  
export default BoxCurrency;

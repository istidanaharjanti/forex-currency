import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Row, Col, Card, Button } from 'react-bootstrap';

import './boxCurrency.css'

const BoxCurrency = ({ currency, result, currencyDetail, rate, deleteButtonAction }) => (
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
                  <p className="text-static currency">{currency} - {currencyDetail}</p>
                  <p className="text-static">1 USD = {rate}</p>
                </Col>
              </Row>
            </Col>
            <Col md={2} style={{ alignSelf:'center' }}>
              <Button variant="outline-dark" onClick={deleteButtonAction}>
                <i className="fa fa-trash"></i>
              </Button>
            </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
  );
  
  BoxCurrency.propTypes = {
    currency: PropTypes.string,
    result: PropTypes.string,
    currencyDetail: PropTypes.string,
    rate: PropTypes.string,
    deleteButtonAction: PropTypes.func,
  };
  
  BoxCurrency.defaultProps = {
    currency: '',
    currencyDetail: '',
    result: '',
    rate: '',
    deleteButtonAction: noop,
  };
  
export default BoxCurrency;

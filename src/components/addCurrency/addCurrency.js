import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const AddCurrency = () => (
    <Row>
      <Col md={8}>
        <Form.Group controlId="add-currency">
          <Form.Control as="select">
            <option>Add more currencies</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Button variant="primary" style={{width: '100%'}}>
          Submit
        </Button>
      </Col>
    </Row>
);

export default AddCurrency;
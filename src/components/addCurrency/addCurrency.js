import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import noop from 'lodash/noop';

const AddCurrency = ({
    list,
    buttonText,
    onSelectAction,
    addCurrencyButtonAction,
    isDisabledButtonAdd }) => (
    <Row>
      <Col md={8}>
        <Form.Group controlId="add-currency">
          <Form.Control as="select" onChange={onSelectAction}>
            {
              list.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.label}
                </option>
              ))
            }
          </Form.Control>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Button variant="primary" block onClick={addCurrencyButtonAction} disabled={isDisabledButtonAdd}>
          {buttonText}
        </Button>
      </Col>
    </Row>
);


AddCurrency.propTypes = {
  list: PropTypes.array,
  buttonText: PropTypes.string,
  onSelectAction: PropTypes.func,
  addCurrencyButtonAction: PropTypes.func,
  isDisabledButtonAdd: PropTypes.bool,
  currencyList: PropTypes.array,
};

AddCurrency.defaultProps = {
  list: [],
  currencyList: [],
  buttonText: 'Submit',
  onSelectAction: noop,
  addCurrencyButtonAction: noop,
  isDisabledButtonAdd: false,
};

export default AddCurrency;
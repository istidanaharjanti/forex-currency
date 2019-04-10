import React, { Component } from 'react';
import './App.css';
import { Card, Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import BoxCurrency from '../../components/boxCurrency/boxCurrency';
import AddCurrency from '../../components/addCurrency/addCurrency';


const dataCurrencies = [
  {
    label: 'Add more currencies',
    value: 0
  },
  {
    value: 'USD',
    label: 'USD',
    detail: 'United States Dollars',
  },
  {
    value: 'CAD',
    label: 'CAD',
    detail: 'Canadian Dollars',
  },
  {
    value: 'IDR',
    label: 'IDR',
    detail: 'Indonesian Rupiah',
  },
  {
    value: 'GBP',
    label: 'GBP',
    detail: 'British Pounds',
  },
  {
    value: 'SGD',
    label: 'SGD',
    detail: 'Singapore Dollars',
  },
  {
    value: 'INR',
    label: 'INR',
    detail: 'Indian Rupees',
  },
  {
    value: 'MYR',
    label: 'MYR',
    detail: 'Malaysian Ringgits',
  },
  {
    value: 'JPY',
    label: 'JPY',
    detail: 'Japanese Yen',
  },
  {
    value: 'KRW',
    label: 'KRW',
    detail: 'South Korean Won',
  },
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  _handleSelectCurrency(event){
    console.log(event);
    console.log(this.inputEl);
  };

  _addOtherCurrency(event){
    console.log(event);
  };

  render() {
    return (
      <Container fluid>
        <Card className="App-header">
          <Card.Body>
            <Row className="input-box">
              <Col>
                <p className="text-italic">USD - United States Dollar</p>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>USD</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl defaultValue="10000" style={{textAlign: 'right'}} />
                </InputGroup>
              </Col>
            </Row>
            <hr style={{ margin: '0 -20px' }} />
            <BoxCurrency>
              <Button variant="outline-dark">
                <i className="fa fa-trash"></i>
              </Button>
            </BoxCurrency>
            <AddCurrency 
              list={dataCurrencies} 
              onSelectAction={this._handleSelectCurrency.bind(this)}
              ref={el => this.inputEl=el}
              addCurrencyButtonAction={this._addOtherCurrency}
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default App;

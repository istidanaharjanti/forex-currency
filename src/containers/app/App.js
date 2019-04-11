import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import { Card, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

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
    this.state = {
      selectedCurrency: '',
      currencyLists: [],
      rateLists: {},
    };
  };

  _handleSelectCurrency = (event) => {
    this.setState({
      selectedCurrency: event.target.value,
    });
  };

  _addOtherCurrency = () => {
    const detailSelected = dataCurrencies.find(data => data.value === this.state.selectedCurrency);
    const currencySelected = this.state.selectedCurrency;
    const currencyItem = {
      currency: currencySelected,
      currencyName: detailSelected.detail,
      rateSelected: this.state.rateLists[currencySelected],
    }
    const newArr = [];
    newArr.push(currencyItem);
    this.setState({
      currencyLists: this.state.currencyLists.concat(newArr),
    });
  };

  _handleDeleteCurrency = (index) => {
    this.state.currencyLists.splice(index, 1);
    this.setState({
      currencyLists: this.state.currencyLists,
    });
  };

  async componentDidMount() {
    const { data: { rates } } = await axios.get('https://api.exchangeratesapi.io/latest?base=USD');
    this.setState({
      rateLists: rates,
    });
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
            {this.state.currencyLists.length > 0 &&
              this.state.currencyLists.map((data, index) => (
                <BoxCurrency
                  currency={data.currency}
                  currencyDetail={data.currencyName}
                  rate={data.rateSelected}
                  key={`${data.currency} - ${index}`}
                  deleteButtonAction={ () => this._handleDeleteCurrency(index) }
                />
              ))
            }
            <AddCurrency 
              list={dataCurrencies}
              onSelectAction={this._handleSelectCurrency}
              addCurrencyButtonAction={this._addOtherCurrency}
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default App;

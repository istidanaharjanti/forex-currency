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
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: '',
      currencyLists: [],
      rateLists: {},
      isDisabledOption: false,
      inputValue: '10000',
    };
    this._handleDeleteCurrency.bind(this);
    this._handleSelectCurrency.bind(this);
    this._addOtherCurrency.bind(this);
    this._disablingOption.bind(this);
    this._currencyFormat.bind(this);
    this._calculateRate.bind(this);
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

  _handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ inputValue: value })
  };

  _disablingOption = () => {
    let disabled = false;
    if(this.state.currencyLists.length > 0) {
      this.state.currencyLists.find(data => {
        if(data.currency === this.state.selectedCurrency) {
          console.log('nih')
          disabled = true;
        } else {
          console.log('test')
          disabled = false;
        }
        return disabled;
      });
    }
    return disabled;
  };

  _currencyFormat = (name, val) => {
    const options = {
      style: 'currency',
      currency: name,
      maximumFractionDigits: 2,
      currencyDisplay: 'code',
    };
    const format = new Intl.NumberFormat('id-ID', options).format(val);
    return format;
  }

  _calculateRate = (name) => {
    const inputtedVal = Number(this.state.inputValue);
    const rate = this.state.rateLists[name].toFixed(2);
    const result = inputtedVal * Number(rate);
    const format = this._currencyFormat(name, result);
    return format.slice(4);
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
                  <FormControl type="text" style={{textAlign: 'right'}} value={this.state.inputValue} onChange={this._handleInputChange}/>
                </InputGroup>
              </Col>
            </Row>
            <hr style={{ margin: '0 -20px' }} />
            {this.state.currencyLists.length > 0 &&
              this.state.currencyLists.map((data, index) => (
                <BoxCurrency
                  currency={data.currency}
                  result={this._calculateRate(data.currency)}
                  currencyDetail={data.currencyName}
                  rate={this._currencyFormat(data.currency, data.rateSelected)}
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

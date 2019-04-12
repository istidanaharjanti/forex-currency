import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  let component;
  let mockFn;

  beforeEach(() => {
    component = shallow(
      <App/>,
    );
    mockFn = jest.spyOn(component.instance(), '_handleDeleteCurrency');
    component.instance()._handleDeleteCurrency = mockFn;
  });

  test('Component exists', () => {
    expect(component.length).toBe(1);
  });

  test('componentDidMount', async () => {
    await component.instance().componentDidMount();
    expect(component.state().rateLists).not.toBe(undefined);
  });

  test('_handleSelectCurrency', () => {
    const event = {
      target: {
        value: 'IDR',
      },
    };
    component.instance()._handleSelectCurrency(event);
    expect(component.state().selectedCurrency).toEqual('IDR');
  });

  test('_addOtherCurrency', () => {
    component.setState({
      selectedCurrency: 'IDR',
      rateList: {},
    });
    component.instance()._addOtherCurrency();
    expect(component.state().currencyLists).toEqual([
      { 
        currency: 'IDR',
        currencyName: 'Indonesian Rupiah',
        rateSelected: '',
      }
    ]);
  });

  test('_addOtherCurrency with defined object', async () => {
    await component.instance().componentDidMount();
    component.setState({
      selectedCurrency: 'IDR',
    });
    component.instance()._addOtherCurrency();
    expect(component.state().currencyLists).toEqual([
      { 
        currency: 'IDR',
        currencyName: 'Indonesian Rupiah',
        rateSelected: component.state().rateLists['IDR']
      }
    ]);
  });

  test('_handleDeleteCurrency', () => {
    component.setState({
      currencyLists: [
        { 
          currency: 'IDR',
          currencyName: 'Indonesian Rupiah',
          rateSelected: 14150.0044330171,
        },
        { 
          currency: 'USD',
          currencyName: 'United States Dollars',
          rateSelected: 1,
        },
      ]
    });
    component.instance()._handleDeleteCurrency(1);
    expect(component.state().currencyLists).toEqual([
      { 
        currency: 'IDR',
        currencyName: 'Indonesian Rupiah',
        rateSelected: 14150.0044330171,
      },
    ]);
  });

  test('_handleInputChange', () => {
    const event = {
      target: {
        value: 150,
      },
    };
    component.instance()._handleInputChange(event);
    expect(component.state().inputValue).toEqual(150);
  });

  test('_disablingOption', () => {
    expect(component.instance()._disablingOption()).toBe(false);
    component.setState({
      selectedCurrency: 'IDR',
      currencyLists: [
        { 
          currency: 'IDR',
          currencyName: 'Indonesian Rupiah',
          rateSelected: 14150.0044330171,
        },
        { 
          currency: 'USD',
          currencyName: 'United States Dollars',
          rateSelected: 1,
        },
      ],
    });
    expect(component.instance()._disablingOption()).toBe(true);
  });

  test('_currencyFormat', () => {
    const format = component.instance()._currencyFormat('IDR', 5000);
    expect(format).not.toBe(NaN);
    expect(format.localeCompare()).toEqual(-1);
  });

  test('BoxCurrency rendered', async () => {
    await component.instance().componentDidMount();
    component.setState({
      currencyLists: [
        { 
          currency: 'IDR',
          currencyName: 'Indonesian Rupiah',
          rateSelected: component.state().rateLists['IDR'],
        },
      ],
      inputValue: 10,
    });
    component.instance()._calculateRate('IDR');
    expect(component.find('BoxCurrency')).toHaveLength(1);
    component.find('BoxCurrency').props().deleteButtonAction();
    expect(mockFn).toBeCalled();
  });

  test('BoxCurrency is not rendered', async () => {
    await component.instance().componentDidMount();
    component.setState({
      currencyLists: [],
    });
    expect(component.find('BoxCurrency')).toHaveLength(0);
  });

  test('AddCurency rendered', async () => {
    await component.instance().componentDidMount();
    component.setState({
      currencyLists: [
        { 
          currency: 'IDR',
          currencyName: 'Indonesian Rupiah',
          rateSelected: component.state().rateLists['IDR'],
        },
      ],
    });
    expect(component.find('AddCurrency')).toHaveLength(1);
  });
});
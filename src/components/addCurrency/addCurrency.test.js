import React from 'react';
import { shallow } from 'enzyme';

import { Button } from 'react-bootstrap';
import AddCurrency from './addCurrency';

describe('AddCurrency Component', () => {
  let component;
  const _spies = {};

  beforeEach(() => {
    const _props = {
      addCurrencyButtonAction: _spies.onClick = jest.fn(),
    };
    component = shallow(
      <AddCurrency {..._props} />,
    );
  });

  test('Component exists', () => {
    expect(component.length).toBe(1);
  });

  test('should call function on addCurrencyButtonAction', () => {
    component.find(Button).simulate('click');
    expect(_spies.onClick).toBeCalled();
  });

  test('render option by list props', () => {
    component.setProps({
      list: [ 
        { value: '0', label: 'Add more currencies', detail: '0' },
        { value: 'USD', label: 'USD', detail: 'United States Dollars' },
        { value: 'CAD', label: 'CAD', detail: 'Canadian Dollars' },
        { value: 'IDR', label: 'IDR', detail: 'Indonesian Rupiah' },
        { value: 'GBP', label: 'GBP', detail: 'British Pounds' },
        { value: 'SGD', label: 'SGD', detail: 'Singapore Dollars' },
        { value: 'INR', label: 'INR', detail: 'Indian Rupees' },
        { value: 'MYR', label: 'MYR', detail: 'Malaysian Ringgits' },
        { value: 'JPY', label: 'JPY', detail: 'Japanese Yen' },
        { value: 'KRW', label: 'KRW', detail: 'South Korean Won' }
      ],
    });
    expect(component.find('option')).toHaveLength(10);
  });
});
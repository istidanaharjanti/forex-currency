import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';

import BoxCurrency from './boxCurrency';

describe('BoxCurrency Component', () => {
  let component;
  const _spies = {};

  beforeEach(() => {
    const _props = {
      deleteButtonAction: _spies.onClick = jest.fn(),
    };
    component = shallow(
      <BoxCurrency {..._props} />,
    );
  });

  test('Component exists', () => {
    expect(component.length).toBe(1);
  });

  test('should call function on deleteButtonActionProps', () => {
    component.find(Button).simulate('click');
    expect(_spies.onClick).toBeCalled();
  });
});
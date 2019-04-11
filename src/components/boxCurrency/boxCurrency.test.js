import React from 'react';
import { shallow } from 'enzyme';

import BoxCurrency from './boxCurrency';

describe('BoxCurrency Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <BoxCurrency />,
    );
  });

  test('Component exists', () => {
    expect(component.length).toBe(1);
  });

});
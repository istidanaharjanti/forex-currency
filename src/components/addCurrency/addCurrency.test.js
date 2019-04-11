import React from 'react';
import { shallow } from 'enzyme';

import AddCurrency from './addCurrency';

describe('AddCurrency Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <AddCurrency />,
    );
  });

  test('Component exists', () => {
    expect(component.length).toBe(1);
  });

});
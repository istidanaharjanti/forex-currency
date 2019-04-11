import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <App />,
    );
  });

  test('Component exists', () => {
    expect(component.length).toBe(1);
  });

});
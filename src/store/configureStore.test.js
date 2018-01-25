import React from 'react';
import { shallow } from 'enzyme';
import ConfigureStore from './configureStore';

it('should render Header correctly', () => {
  const wrapper = shallow(<ConfigureStore />);
  expect(wrapper).toMatchSnapshot();
});

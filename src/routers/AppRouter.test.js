import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';

it('should render Header correctly', () => {
  const wrapper = shallow(<AppRouter />);
  expect(wrapper).toMatchSnapshot();
});

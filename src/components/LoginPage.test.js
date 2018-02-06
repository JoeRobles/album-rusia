import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

it('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage store={store} />);
  expect(wrapper).toMatchSnapshot();
});

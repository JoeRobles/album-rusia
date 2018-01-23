import React from 'react';
import { shallow } from 'enzyme';
import { expensesReducerDefaultState } from '../test-helpers/MockData';
import { ExpenseList } from './ExpenseList';

it('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expensesReducerDefaultState} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

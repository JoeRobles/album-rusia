import React from 'react';
import { shallow } from 'enzyme';
import { expensesReducerDefaultState } from '../test-helpers/MockData';
import {ExpensesSummary} from './ExpensesSummary';

it('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

it('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987}/>);
  expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './AddExpensePage';
import { expensesReducerDefaultState } from '../test-helpers/MockData';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

it('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesReducerDefaultState[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expensesReducerDefaultState[0]);
});



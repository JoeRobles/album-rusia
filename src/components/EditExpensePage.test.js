import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';
import { expensesReducerDefaultState } from '../test-helpers/MockData';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expensesReducerDefaultState[0]}
    />
  );
});

it('should render editExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesReducerDefaultState[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expensesReducerDefaultState[0].id, expensesReducerDefaultState[0]);
});

it('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expensesReducerDefaultState[0].id);
});

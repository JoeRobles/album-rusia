import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';
import { expensesReducerDefaultState } from '../test-helpers/MockData';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expensesReducerDefaultState[0]}
    />
  );
});

it('should render editExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesReducerDefaultState[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expensesReducerDefaultState[0].id, expensesReducerDefaultState[0]);
});

it('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expensesReducerDefaultState[0].id);
});

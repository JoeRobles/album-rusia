import expensesReducer from './expenses';
import { expensesReducerDefaultState } from '../test-helpers/MockData';

it('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(expensesReducerDefaultState);
});

it('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expensesReducerDefaultState[1].id,
  };
  const state = expensesReducer(expensesReducerDefaultState, action);
  expect(state).toEqual([
    expensesReducerDefaultState[0],
    expensesReducerDefaultState[2],
    expensesReducerDefaultState[3],
  ]);
});

it('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 1,
  };
  const state = expensesReducer(expensesReducerDefaultState, action);
  expect(state).toEqual(expensesReducerDefaultState);
});

it('should add an expense', () => {
  const expense = {
    description: 'this expense',
    note: 'should be added',
    amount: 200,
    createdAt: 1515267500000,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expensesReducerDefaultState, action);
  expect(state).toEqual([
    ...expensesReducerDefaultState,
    expense,
  ]);
});

it('should edit an expense', () => {
  const updates = {
    description: 'February Rent',
    amount: 154500,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'poijasdfhwer',
    updates,
  };
  const state = expensesReducer(expensesReducerDefaultState, action);
  expect(state).toEqual([
    {
      ...expensesReducerDefaultState[0],
      ...updates
    },
    expensesReducerDefaultState[1],
    expensesReducerDefaultState[2],
    expensesReducerDefaultState[3],
  ]);
});

it('should not edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'gyjryrbryrgy',
    updates: {
      description: 'February Rent',
      amount: 154500,
    },
  };
  const state = expensesReducer(expensesReducerDefaultState, action);
  expect(state).toEqual(expensesReducerDefaultState);
});

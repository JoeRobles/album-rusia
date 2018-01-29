import selectExpensesTotal from './expenses-total';
import { expensesReducerDefaultState } from '../reducers/expenses';

it('should return 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

it('should correctly add up a single expense', () => {
  expect(selectExpensesTotal([expensesReducerDefaultState[0]])).toBe(54500);
});

it('should correctly add up multiple expenses', () => {
  expect(selectExpensesTotal(expensesReducerDefaultState)).toBe(55100);
});

import selectExpenses from './expenses';
import { expensesReducerDefaultState } from '../reducers/expenses';

it('should filter by text value', () => {
  const filters = {
    text: 'gas',
    sortBy: 'date',
    asc: true,
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expensesReducerDefaultState, filters);
  expect(result).toEqual([expensesReducerDefaultState[2]]);
});

it('should filter by text value', () => {
  const filters = {
    text: 'gas',
    sortBy: 'date',
    asc: true,
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expensesReducerDefaultState, filters);
  expect(result).toEqual([expensesReducerDefaultState[2]]);
});

it('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    asc: true,
    startDate: 1515140400000,
    endDate: undefined,
  };
  const result = selectExpenses(expensesReducerDefaultState, filters);
  expect(result).toEqual([
    expensesReducerDefaultState[3],
    expensesReducerDefaultState[2],
  ]);
});

it('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    asc: true,
    startDate: undefined,
    endDate: 1515140400000,
  };
  const result = selectExpenses(expensesReducerDefaultState, filters);
  expect(result).toEqual([
    expensesReducerDefaultState[2],
    expensesReducerDefaultState[1],
    expensesReducerDefaultState[0],
  ]);
});

it('should filter by date value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    asc: true,
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expensesReducerDefaultState, filters);
  expect(result).toEqual([
    expensesReducerDefaultState[3],
    expensesReducerDefaultState[2],
    expensesReducerDefaultState[1],
    expensesReducerDefaultState[0],
  ]);
});

it('should filter by amount value', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    asc: true,
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expensesReducerDefaultState, filters);
  expect(result).toEqual([
    expensesReducerDefaultState[0],
    expensesReducerDefaultState[2],
    expensesReducerDefaultState[3],
    expensesReducerDefaultState[1],
  ]);
});

describe('DESCENDING', () => {
  beforeEach(() => {
    return expensesReducerDefaultState.reverse();
  });
  it('should filter by startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      asc: false,
      startDate: 1515140400000,
      endDate: undefined,
    };
    const result = selectExpenses(expensesReducerDefaultState, filters);
    expect(result).toEqual([
      expensesReducerDefaultState[1],
      expensesReducerDefaultState[0],
    ]);
  });

  it('should filter by endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      asc: false,
      startDate: undefined,
      endDate: 1515140400000,
    };
    const result = selectExpenses(expensesReducerDefaultState, filters);
    expect(result).toEqual([
      expensesReducerDefaultState[0],
      expensesReducerDefaultState[1],
      expensesReducerDefaultState[2],
    ]);
  });

  it('should filter by date value', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      asc: false,
      startDate: undefined,
      endDate: undefined,
    };
    const result = selectExpenses(expensesReducerDefaultState, filters);
    expect(result).toEqual([
      expensesReducerDefaultState[3],
      expensesReducerDefaultState[2],
      expensesReducerDefaultState[1],
      expensesReducerDefaultState[0],
    ]);
  });

  it('should filter by amount value', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      asc: false,
      startDate: undefined,
      endDate: undefined,
    };
    const result = selectExpenses(expensesReducerDefaultState, filters);
    expect(result).toEqual([
      expensesReducerDefaultState[1],
      expensesReducerDefaultState[3],
      expensesReducerDefaultState[2],
      expensesReducerDefaultState[0],
    ]);
  });
});

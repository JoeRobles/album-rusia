import filtersReducer from './filters';
import { filtersReducerDefaultState } from '../test-helpers/MockData';

it('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(filtersReducerDefaultState);
});

it('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    asc: true,
    startDate: undefined,
    endDate: undefined,
  };
  const action = {
    type: 'SORT_BY_DATE',
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

it('should set text filter', () => {
  const currentState = {
    text: 'gas',
    sortBy: 'date',
    asc: true,
    startDate: undefined,
    endDate: undefined,
  };
  const text = 'gas';
  const state = filtersReducer(
    currentState,
    {
      type: 'SET_TEXT_FILTER',
      text
    },
  );
  expect(state.text).toBe('gas');
});

it('should set startDate filter', () => {
  const state = filtersReducer(
    undefined,
    {
      type: 'SET_START_DATE',
      startDate: 1515140400000,
    },
  );
  expect(state.startDate).toBe(1515140400000);
});

it('should set endDate filter', () => {
  const state = filtersReducer(
    undefined,
    {
      type: 'SET_END_DATE',
      endDate: 1515140400000,
    },
  );
  expect(state.endDate).toBe(1515140400000);
});

it('should set descending filter', () => {
  const asc = false;
  const state = filtersReducer(
    undefined,
    {
      type: 'SET_ASCENDING',
      asc,
    },
  );
  expect(state.asc).toBe(asc);
});

it('should set ascending filter', () => {
  const asc = true;
  const state = filtersReducer(
    undefined,
    {
      type: 'SET_ASCENDING',
      asc,
    },
  );
  expect(state.asc).toBe(asc);
});

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  setAscending,
} from './filters';
import moment from 'moment';

it('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

it('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

it('should generate set text filter object with text value', () => {
  const text = 'rent';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

it('should generate set text filter object with default', () => {
  const text = '';
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

it('should generate action object for sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

it('should generate action object for sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

it('should generate ascending action object', () => {
  const asc = true;
  const action = setAscending();
  expect(action).toEqual({
    type: 'SET_ASCENDING',
    asc,
  });
});

it('should generate ascending with no value action object', () => {
  const asc = true;
  const action = setAscending(asc);
  expect(action).toEqual({
    type: 'SET_ASCENDING',
    asc,
  });
});

it('should generate descending action object', () => {
  const asc = false;
  const action = setAscending(asc);
  expect(action).toEqual({
    type: 'SET_ASCENDING',
    asc,
  });
});

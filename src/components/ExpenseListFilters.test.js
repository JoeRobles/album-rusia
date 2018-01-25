import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from './ExpenseListFilters';
import {
  filtersReducerDefaultState,
  filtersReducerMockState,
} from '../test-helpers/MockData';

let setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  wrapper;

setTextFilter = jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
setStartDate = jest.fn();
setEndDate = jest.fn();
wrapper = shallow(
  <ExpenseListFilters
    filters={filtersReducerDefaultState}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />,
);

it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: filtersReducerDefaultState,
  });
  expect(wrapper).toMatchSnapshot();
});

it('should handle text change', () => {
  const value = 'gas';
  wrapper.find('input').simulate('change', {
    target: { value },
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('should sortBy by date', () => {
  const value = 'date';
  wrapper.setProps('change', {
    filters: filtersReducerMockState,
  });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

it('should sortBy by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

it('should not sortBy', () => {
  const value = '';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalledWith();
  expect(sortByDate).toHaveBeenCalledWith();
});

it('should set startDate and endDate', () => {
  const startDate = moment().subtract(4, 'weeks');
  const endDate = moment().add(2, 'weeks');
  wrapper.find('div').children().at(2).prop('onDatesChange')({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

it('should check if is outside range', () => {
  const startDate = moment().subtract(4, 'weeks');
  const endDate = moment().add(2, 'weeks');
  wrapper.find('div').children().at(2).prop('isOutsideRange')();
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

it('should handle date focus changese', () => {
  const calendarFocused = 'endDate';
  wrapper.find('div').children().at(2).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

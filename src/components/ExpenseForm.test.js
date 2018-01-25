import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './ExpenseForm';
import { expensesReducerDefaultState } from '../test-helpers/MockData';
import moment from 'moment';

it('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expensesReducerDefaultState[0]} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseForm correctly when submit button clicked', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('button').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
    },
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

it('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New description';
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('description')).toBe(value);
});

it('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New note';
  wrapper.find('textarea').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('note')).toBe(value);
});

it('should set amount on input change if valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '23.50';
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe(value);
});

it('should not set amount on input change if invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '12.122';
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe('');
});

it('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expensesReducerDefaultState[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
    },
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 1514954400000,
  });
});

it('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').children().at(2).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

it('should set new date on date change with no date provided', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').children().at(2).prop('onDateChange')();
  expect(wrapper.state('createdAt')).toEqual(now);
});

it('should check if is outside range', () => {
  const now = moment(0);
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').children().at(2).prop('isOutsideRange')();
  expect(wrapper.state('createdAt')).toEqual(now);
});

it('should set calendar focus false on change', () => {
  const focused = false;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').children().at(2).prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});

it('should set calendar focus true on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').children().at(2).prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});

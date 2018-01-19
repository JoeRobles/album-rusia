import uuid from 'uuid';

export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = ({ id = '' }) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const editExpense = ({ expense = {} }) => ({
  type: 'EDIT_EXPENSE',
  expense,
});

export const showExpense = ({ id = '' }) => ({
  type: 'SHOW_EXPENSE',
  id,
});
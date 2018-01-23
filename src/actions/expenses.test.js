import { addExpense, editExpense, removeExpense, showExpense } from './expenses';

it('should setup remove expense action object', () => {
  const id = '123abc';
  const action = removeExpense(id);

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id,
  });
});

it('should setup edit expense action object', () => {
  const updates = {
    id: 'lmdfmlgkdnfg',
    description: 'water bill',
    amount: 100,
    createdAt: 1515085200000,
  };
  const action = editExpense(updates.id, updates);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: updates.id,
    updates,
  });
});

it('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'water bill',
    amount: 100,
    createdAt: 1515085200000,
    note: '',
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

it('should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
    },
  });
});

it('should setup show expense action object with provided values', () => {
  const action = showExpense('lmdfmlgkdnfg');

  expect(action).toEqual({
    type: 'SHOW_EXPENSE',
    id: 'lmdfmlgkdnfg',
  });
});

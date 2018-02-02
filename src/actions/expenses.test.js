import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, editExpense, removeExpense, showExpense } from './expenses';
import { expensesReducerDefaultState } from '../test-helpers/MockData'
import database from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

it('should setup remove expense action object', () => {
  const id = '123abc';
  const action = removeExpense(id);

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id,
  });
});

it('should not remove expense action object with non provided value', () => {
  const action = removeExpense();

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '',
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
  const action = addExpense(expensesReducerDefaultState[0]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expensesReducerDefaultState[0],
  });
});

it('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000,
  };
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

it('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
  };
  store.dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// it('should setup add expense action object with default values', () => {
//   const action = addExpense();
//
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       note: '',
//       createdAt: 0,
//     },
//   });
// });

it('should setup show expense action object with provided values', () => {
  const action = showExpense('lmdfmlgkdnfg');

  expect(action).toEqual({
    type: 'SHOW_EXPENSE',
    id: 'lmdfmlgkdnfg',
  });
});

it('should not show expense action object with non provided values', () => {
  const action = showExpense();

  expect(action).toEqual({
    type: 'SHOW_EXPENSE',
    id: '',
  });
});

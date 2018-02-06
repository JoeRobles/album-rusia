import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  editExpense,
  removeExpense,
  showExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from './expenses';
import { expensesReducerDefaultState } from '../test-helpers/MockData';
import database from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expensesReducerDefaultState.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

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
          ...expenseData,
        },
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
          ...expenseDefaults,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

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

it('should setup set expense action object with data', () => {
  const action = setExpenses(expensesReducerDefaultState);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses: expensesReducerDefaultState,
  });
});

it('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses: [
        expensesReducerDefaultState[2],
        expensesReducerDefaultState[1],
        expensesReducerDefaultState[0],
        expensesReducerDefaultState[3],
      ],
    });
    done();
  });
});

it('should remove a expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expensesReducerDefaultState[2].id;
  store.dispatch(startRemoveExpense(id))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });

      return database.ref(`expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

it('should edit expenses from firebase', async (done) => {
  const store = createMockStore({});
  const id = expensesReducerDefaultState[0].id;
  const updates = { amount: 123456 };
  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });

      return database.ref(`expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toEqual(updates.amount);
      done();
    });
});

export const expensesReducerDefaultState = [
  {
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 1514954400000,
  },
  {
    id: 'lmdfmlgkdnfg',
    description: 'water bill',
    note: '',
    amount: 100,
    createdAt: 1515085200000,
  },
  {
    id: 'fhgerthhrdhd',
    description: 'gas bill',
    note: '',
    amount: 300,
    createdAt: 1515140400000,
  },
  {
    id: 'sñojglsjslkg',
    description: 'internet bill',
    note: '',
    amount: 200,
    createdAt: 1515267500000,
  },
];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (action.id === expense.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case 'SET_EXPENSES':
      return action.expenses;
    case 'SHOW_EXPENSE':
      return state.find(({ id }) => action.id === id);
    default:
      return state;
  }
};

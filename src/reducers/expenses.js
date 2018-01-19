const expensesReducerDefaultState = [{
  id: 'poijasdfhwer',
  description: 'January Rent',
  note: 'This was the final payment for that address',
  amount: 54500,
  createdAt: 0,
}];

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
      return state.find(({ id }) => action.expense.id === id);
    case 'SHOW_EXPENSE':
      return state.find(({ id }) => action.id === id);
    default:
      return state;
  }
};

import moment from 'moment';

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

export const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  asc: true,
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export const filtersReducerMockState = {
  text: 'bills',
  sortBy: 'amount',
  asc: true,
  startDate: moment(0),
  endDate: moment(0).add('3', 'days'),
};

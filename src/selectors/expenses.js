import moment from 'moment';

export default (expenses, { text, sortBy, asc, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    const setAsc = (sort) => {
      if (asc) {
        return sort;
      } else {
        return !sort;
      }
    };
    let ascending;
    if (sortBy === 'date') {
      ascending = setAsc(a.createdAt < b.createdAt);
    } else if (sortBy === 'amount') {
      ascending = setAsc(a.amount < b.amount);
    }

    return ascending ? 1 : -1;
  });
};

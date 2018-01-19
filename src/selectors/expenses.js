
export default (expenses, { text, sortBy, asc, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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
    if (sortBy === 'date') {
      return (setAsc(a.createdAt < b.createdAt)) ? 1 : -1;
    } else if (sortBy === 'amount') {
      return (setAsc(a.amount < b.amount)) ? 1 : -1;
    }
  });
};

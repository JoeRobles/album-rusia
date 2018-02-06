import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import ExpensesSummary from './ExpensesSummary';

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <table>
      <thead>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Created at</th>
      </tr>
      </thead>
      <tbody>
      {
        props.expenses.length === 0 ? (
          <tr><td>No expenses</td></tr>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} {...props} />;
          })
        )
      }
      </tbody>
      <ExpensesSummary/>
    </table>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <tr>
    <td>{description}</td>
    <td>{numeral(amount / 100).format('$0,0.00')}</td>
    <td>{moment(createdAt).format('MMMM Do, YYYY')}</td>
    <td>
      <Link to={`/edit/${id}`}>Edit</Link>
    </td>
  </tr>
);

export default connect()(ExpenseListItem);

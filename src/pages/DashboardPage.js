import React from 'react';
import CheckList from '../components/CheckList';

const DashboardPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h1>Control</h1>
      </div>
    </div>
    <CheckList />
  </div>
);

export default DashboardPage;
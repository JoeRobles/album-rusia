import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box">
      <h1 className="title">Expensify App</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="login-with-google" aria-pressed="true" onClick={startLogin}></button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

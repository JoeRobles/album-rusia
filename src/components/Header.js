import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import expensifyLogo from '../images/expensify_logo.png'

const Header = ({ startLogout }) => (
  <header className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">
      <img
        src={expensifyLogo}
        className="d-inline-block align-top expensify-logo"
        alt=""
      />
        Expensify
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink
            className="nav-link"
            to="/dashboard"
            activeClassName="is-active"
            exact={true}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/create"
            activeClassName="is-active"
          >
            Create
          </NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          onClick={startLogout}
        >
          Logout
        </button>
      </form>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);

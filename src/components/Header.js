import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import logo from '../images/russia-ball.png';

const Header = ({ startLogout }) => (
  <header className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">
      <img
        src={logo}
        className="d-inline-block align-top logo"
        alt="Album Rusia"
      />
        Album Rusia
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

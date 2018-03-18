import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import logo from '../images/russia-ball.png';

const Header = ({ startLogout, user}) => (
  <header className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">
      <img
        src={logo}
        className="d-inline-block align-top logo"
        alt="Album Rusia"
      /> Album Rusia
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
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={user.photoURL} alt={user.displayName} className="logo rounded-circle" /> {user.displayName}
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" onClick={startLogout}>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

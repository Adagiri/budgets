import React from "react";
import { NavLink, Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/create">Add Expense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

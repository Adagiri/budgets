import React from "react";
import ExpenseList from "./ExpenseList";
import FilterExpenses from "./FilterExpenses";
import ExpensesSummary from "./ExpensesSummary";
import { connect } from "react-redux";

const HomePage = props => (
  <div>
    {props.expenses.length > 0 ? "" : <p>No expense</p>}
    <ExpensesSummary />
    <FilterExpenses />
    <hr />
    <ExpenseList />
  </div>
);

const mapStateToprops = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToprops)(HomePage);

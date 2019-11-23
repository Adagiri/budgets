import React from "react";
import { Link } from 'react-router-dom';
import ExpenseTotal from "../selectors/ExpensesTotal";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import numeral from "numeral";

const ExpensesSummary = props => (
  <div className="page-header">
  <div className="content-container">
  <h1 className="page-header__title">
    Viewing <span>{props.expenses.length}</span> expenses totalling{" "}
    <span>{numeral(ExpenseTotal(props.expenses) / 100).format("$0,0.00")}</span>
  </h1>
    {
      props.unfiltered.length > props.expenses.length ? <h3 className="page-header__title not-viewing"> Not viewing <span>{props.unfiltered.length - props.expenses.length}</span> expense because of filters</h3> : ""
    }
    <div className="page-header__action">
    <Link className="button" to="/create">Add Expense</Link>
    </div>
  </div>
  </div>
);

const mapStateToProps = state => {
  return {
    unfiltered: state.expenses,
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

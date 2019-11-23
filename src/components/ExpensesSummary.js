import React from "react";
import ExpenseTotal from "../selectors/ExpensesTotal";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import numeral from "numeral";

const ExpensesSummary = props => (
  <div>
  <h1>
    Viewing {props.expenses.length} expenses totalling{" "}
    {numeral(ExpenseTotal(props.expenses) / 100).format("$0,0.00")}
  </h1>
    {
      props.unfiltered.length > props.expenses.length ? <h2> Not viewing {props.unfiltered.length - props.expenses.length} expense because of filters</h2> : ""
    }
  </div>
);

const mapStateToProps = state => {
  return {
    unfiltered: state.expenses,
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

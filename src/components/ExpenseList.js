import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

export const ExpenseList = props =>
  props.expenses.map(expense => {
    return <ExpenseListItem key={expense.id} {...expense} />;
  });

const ConnectStateWithProps = connect(state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
})(ExpenseList);

export default ConnectStateWithProps;

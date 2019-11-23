import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

export const ExpenseList = (props) =>(
    <div className="content-container">
    <div className="list-header">
    <div className="show-for-mobile">Expenses</div>
    <div className="show-for-desktop">Expense</div>    
    <div className="show-for-desktop">Amount</div> 
    </div>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })
  }
    </div>
);

const ConnectStateWithProps = connect(state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
})(ExpenseList);

export default ConnectStateWithProps;

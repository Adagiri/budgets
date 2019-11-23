import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startRemoveExpense, startEditExpense } from "../actions/Expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/dashboard");
  };

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <h4>Edit Expense with id of </h4>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
  };
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

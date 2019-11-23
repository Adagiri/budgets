import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.submit = this.submit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : "",
      error: "",
      focused: false
    };
  }

  submit = e => {
    e.preventDefault();
    !this.state.description || !this.state.amount
      ? this.setState(() => ({ error: "Please add description and amount" }))
      : this.props.onSubmit({
          description: this.state.description,
          amount: parseFloat(this.state.amount, 10) * 100,
          note: this.state.note,
          createdAt: this.state.createdAt.valueOf()
        });
  };

  updateDescription = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  updateAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  updateNote = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => this.setState(() => ({ focused }));

  render() {
    return (
      <div>
        <h4>{this.state.error}</h4>
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.updateDescription}
            autoFocus
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.updateAmount}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            numberOfMonths={1}
          />

          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.updateNote}
          ></textarea>
          <button>Add expense</button>
        </form>
      </div>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import {
  filterText,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/Filters";


class FilterExpense extends React.Component {
  state = {
    focused: null
  };

  textChange = e => {
    const text = e.target.value;
    this.props.dispatch(filterText(text));
  };

  optionChange = e => {
    const option = e.target.value;
    option === "date"
      ? this.props.dispatch(sortByDate())
      : this.props.dispatch(sortByAmount());
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
    console.log(moment(startDate)._d);
  };
  // onDatesChange = ({ startDate, endDate }) => {
  //    this.props.setStartDate(startDate);
  //    this.props.setEndDate(endDate);
  //  };

  onFocusChange = focused => {
    this.setState(() => ({ focused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.textChange}
        />
        <select onChange={this.optionChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          startDateId="startDate"
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={() => "DD/MM/YYYY"}
        />
      </div>
    );
  }
}

const MapStateWithProps = state => ({ filters: state.filters });

export default connect(MapStateWithProps)(FilterExpense);

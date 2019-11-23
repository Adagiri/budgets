import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, amount, createdAt, description }) => (

    <Link className="list-item" to={`/edit/${id}`}>
    <div>
    <h3> Description: {description}</h3>
    {moment(createdAt).format("MMMM Do, YYYY")}
    </div>
      <h3>
      {numeral(amount / 100).format("$0,0.00")}
    </h3>
    </Link>
  
);

export default ExpenseListItem;

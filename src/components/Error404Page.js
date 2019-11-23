import React from "react";
import { Link } from "react-router-dom";

const Error404Page = props => (
  <div>
    <h1>
      404! <Link to="/">Go home</Link>
    </h1>
  </div>
);

export default Error404Page;

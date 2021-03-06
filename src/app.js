import React from "react";
import ReactDOM from "react-dom";
import ParentRouter, { history } from "./route/ParentRouter";
import configuration from "./store/configuration";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/Expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import LoadingPage from './components/LoadingPage';

const store = configuration();

const BudgetApp = (
  <Provider store={store}>
    <ParentRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(BudgetApp, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    console.log("logged out");
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

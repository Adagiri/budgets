import React from "react";
import { createBrowserHistory } from 'history';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Error404Page from "../components/Error404Page";
import HomePage from "../components/HomePage";
import LoginPage from '../components/LoginPage';
import { Router, Route, Switch } from "react-router-dom";
import  PrivateRoute  from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const ParentRouter = props => (
  <Router history={history}>
    <div>
      <Switch>
      <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={HomePage}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={Error404Page} />
      </Switch>
    </div>
  </Router>
);

export default ParentRouter;

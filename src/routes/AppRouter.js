import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ExpenseDashboard from "./../components/ExpenseDashboard";
import AddExpense from "./../components/AddExpense";
import EditExpense from "./../components/EditExpense";
import PageNotFound from "./../components/PageNotFound";
import LoginPage from "./../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div className="container-fluid">
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
          <PrivateRoute path="/add" component={AddExpense} />
          <PrivateRoute path="/edit/:id" component={EditExpense} />
          <PublicRoute component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;

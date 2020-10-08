import React, { Fragment } from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboard = () => (
  <Fragment>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpensesList />
  </Fragment>
);

export default ExpenseDashboard;

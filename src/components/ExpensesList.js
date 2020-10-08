import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import getFilteredExpenses from "../redux/selectors/expenses";
import styles from "../styles/ExpensesList.module.css";

const ExpensesList = (props) => (
  <div className={styles.container}>
    {props.expenses.map((expense) => {
      return <ExpenseItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapsStateToProps = (state) => {
  return {
    expenses: getFilteredExpenses(state.expenses, state.filters),
  };
};

export default connect(mapsStateToProps)(ExpensesList);

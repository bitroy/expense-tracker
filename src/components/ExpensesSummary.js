import React from "react";
import { connect } from "react-redux";
import { history } from "../routes/AppRouter";
import getFilteredExpenses from "../redux/selectors/expenses";
import getTotalExpenses from "../redux/selectors/totalexpenses";
import styles from "../styles/ExpensesSummary.module.css";

const ExpensesSummary = (props) => {
  const handleClick = (url) => {
    history.push(url);
  };

  const expenseWord = props.totalExpenses === 1 ? "Expense" : "Expenses";

  return (
    <div className={styles.box_layout}>
      <div className={styles.box_layout__box}>
        <div className={styles.box_layout__box_text}>
          Viewing {props.totalExpenses} {expenseWord} Totalling &#8377;
          {props.totalExpensesAmount}
        </div>
        <div
          className={styles.box_layout__box_button}
          onClick={() => handleClick("/add")}
        >
          Add Expense
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = getFilteredExpenses(state.expenses, state.filters);
  return {
    totalExpenses: expenses.length,
    totalExpensesAmount: getTotalExpenses(expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

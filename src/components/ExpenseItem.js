import React from "react";
import { connect } from "react-redux";
import { history } from "../routes/AppRouter";
import { startRemoveExpense } from "../redux/actions/expenses";
import styles from "../styles/ExpenseItem.module.css";

const ExpenseItem = ({ id, description, amount, createdAt }) => {
  const date = new Date(createdAt).toDateString();

  const handClick = () => {
    const url = `/edit/${id}`;
    history.push(url);
  };

  return (
    <div onClick={handClick} className={styles.list_item}>
      <div className={styles.list_item__row}>
        <div className={styles.list_item__row_description}>{description}</div>
        <div className={styles.list_item__row_amount}>&#8377; {amount}</div>
      </div>
      <div className={styles.list_item__row}>
        <div className={styles.list_item__row_date}>{date}</div>
      </div>
    </div>
  );
};

export default connect(null, { startRemoveExpense })(ExpenseItem);

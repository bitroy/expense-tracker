import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => (
  <div>
    <ExpenseForm type={"add"} history={props.history} />
  </div>
);

export default AddExpense;

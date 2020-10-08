import React from "react";
import ExpenseForm from "./ExpenseForm";

const EditExpense = (props) => (
  <div>
    <ExpenseForm
      type={"edit"}
      history={props.history}
      id={props.match.params.id}
    />
  </div>
);

export default EditExpense;

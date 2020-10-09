import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import { Modal } from "react-responsive-modal";
import {
  startAddExpense,
  startEditExpense,
  startRemoveExpense,
} from "../redux/actions/expenses";
import "react-responsive-modal/styles.css";
import styles from "../styles/ExpenseForm.module.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      date: props.expense ? props.expense.createdAt : new Date(),
      note: props.expense ? props.expense.note : "",
      error: "",
      showModal: false,
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onCalendarDateChange = (date) => {
    if (date) {
      this.setState(() => ({ date }));
    } else {
      this.setState(() => ({
        date: null,
      }));
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description and amount" }));
    } else {
      this.setState(() => ({ error: "" }));
      if (this.props.type === "add") {
        this.props.dispatch(
          startAddExpense({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10),
            createdAt: this.state.date.valueOf(),
            note: this.state.note,
          })
        );
        this.props.history.push("/");
      } else if (this.props.type === "edit") {
        this.props.dispatch(
          startEditExpense(this.props.expense.id, {
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10),
            createdAt: this.state.date.valueOf(),
            note: this.state.note,
          })
        );
        this.props.history.push("/");
      }
    }
  };

  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };

  render() {
    return (
      <div className={styles.container_layout}>
        {this.state.error && <p>{this.state.error}</p>}
        {this.props.type === "edit" ? (
          <div className={styles.container_layout__header}>
            Edit Expense: {this.props.expense.description}
          </div>
        ) : (
          <div className={styles.container_layout__header}>Add Expense</div>
        )}
        <form className={styles.form} onSubmit={this.onSubmit}>
          <DatePicker
            className={styles.form__input_datepicker}
            format="yyyy-MM-dd"
            onChange={this.onCalendarDateChange}
            value={this.state.date ? new Date(this.state.date) : null}
            required={true}
            returnValue="end"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className={styles.form__input}
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            className={styles.form__input}
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            name="note"
            placeholder="Note"
            className={styles.form__textarea}
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          {this.props.type === "add" ? (
            <div className={styles.form__button_group}>
              <button className={styles.form__button_primary}>
                Add Expense
              </button>
              <button
                className={styles.form__button_default}
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className={styles.form__button_group}>
              <button className={styles.form__button_warning}>
                Update Expense
              </button>
              <button
                type="button"
                className={styles.form__button_danger}
                onClick={this.handleOpenModal}
              >
                Remove
              </button>
              <Modal
                open={this.state.showModal}
                onClose={this.handleCloseModal}
                center
              >
                <h2>Are you sure?</h2>
                <p>This expense item will be removed permanently</p>
                <div className={styles.form__button_group_modal}>
                  <button
                    className={styles.form__button_primary}
                    onClick={() => {
                      const id = this.props.expense.id;
                      this.props.dispatch(startRemoveExpense({ id }));
                      this.props.history.push("/");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className={styles.form__button_default}
                    onClick={this.handleCloseModal}
                  >
                    No
                  </button>
                </div>
              </Modal>
            </div>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.id),
  };
};

export default connect(mapStateToProps)(ExpenseForm);

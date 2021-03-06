import React from "react";
import { connect } from "react-redux";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../redux/actions/filters";
import { setStartDate, setEndDate } from "../redux/actions/filters";
import styles from "../styles/ExpenseListFilters.module.css";

const debounce = (cb, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

class ExpenseListFilters extends React.Component {
  state = {
    startDate: this.props.filters.startDate
      ? this.props.filters.startDate
      : null,
    endDate: this.props.filters.endDate ? this.props.filters.endDate : null,
    searchText: this.props.filters.text,
  };

  setDateRange = (datearr) => {
    if (datearr) {
      const startdate = datearr[0];
      const enddate = datearr[1];
      this.setState({
        startDate: datearr[0],
        endDate: datearr[1],
      });
      this.props.dispatch(setStartDate(startdate));
      this.props.dispatch(setEndDate(enddate));
    } else {
      this.setState({
        startDate: null,
        endDate: null,
      });
      this.props.dispatch(setStartDate(null));
      this.props.dispatch(setEndDate(null));
    }
  };

  handleSortChange = (e) => {
    if (e.target.value === "Date") {
      this.props.dispatch(sortByDate());
    } else if (e.target.value === "Amount") {
      this.props.dispatch(sortByAmount());
    }
  };

  searchForText = (text) => {
    this.props.dispatch(setTextFilter(text));
  };

  searchForText = debounce(this.searchForText, 750);

  handleSearch = (e) => {
    const input = e.target.value.trim();
    this.setState({
      searchText: input,
    });
    this.searchForText(input);
  };

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.form__select}>
          <select
            className={styles.form__select_sortby}
            value={this.props.filters.sortBy}
            onChange={this.handleSortChange}
          >
            <option value="Date">Date</option>
            <option value="Amount">Amount</option>
          </select>
        </div>
        <div className={styles.form__input_date}>
          <DateRangePicker
            value={[this.state.startDate, this.state.endDate]}
            format="yyyy-MM-dd"
            onChange={this.setDateRange}
          />
        </div>
        <div className={styles.form__input}>
          <input
            type="text"
            placeholder="Search for Expense"
            className={styles.form__input_searchtext}
            value={this.state.searchText}
            onChange={(e) => this.handleSearch(e)}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

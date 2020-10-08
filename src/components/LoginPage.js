import React, { Fragment } from "react";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";
import styles from "../styles/LoginPage.module.css";

const LoginPage = ({ startLogin }) => {
  return (
    <Fragment>
      <div className={styles.page_header}>
        <div className={styles.page_header__text}>Expense Tracker</div>
      </div>
      <div className={styles.box_layout}>
        <div className={styles.box_layout__box}>
          <div className={styles.box_layout__name}>Login to Track Expenses</div>
          <div className={styles.googlelogin} onClick={startLogin}>
            Login with Google
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

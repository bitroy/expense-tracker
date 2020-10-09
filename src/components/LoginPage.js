import React, { Fragment } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase, uiConfig } from "../firebase/firebase";
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
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;

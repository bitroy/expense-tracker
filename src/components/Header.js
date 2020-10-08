import React from "react";
import { connect } from "react-redux";
import { history } from "../routes/AppRouter";
import { startLogout } from "../redux/actions/auth";
import styles from "../styles/Header.module.css";

const Header = ({ startLogout }) => {
  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <div className={styles.navbar}>
      <div
        className={styles.navbar__div}
        onClick={() => handleClick("/dashboard")}
      >
        Expense Tracker
      </div>
      <div className={styles.navbar__div} onClick={startLogout}>
        Logout
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);

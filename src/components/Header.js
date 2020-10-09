import React from "react";
import { firebase } from "../firebase/firebase";
import { history } from "../routes/AppRouter";
import styles from "../styles/Header.module.css";

const Header = () => {
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
      <div
        className={styles.navbar__div}
        onClick={() => firebase.auth().signOut()}
      >
        Logout
      </div>
    </div>
  );
};

export default Header;

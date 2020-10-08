import React from "react";
import loader from "../images/loader.gif";
import styles from "../styles/LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={styles.pageloader}>
      <img className={styles.pageloader__image} src={loader} alt="loader" />
    </div>
  );
};

export default LoadingPage;

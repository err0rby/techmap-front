import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Seterra</div>
      <div>
        <div className={styles.login}>Sign In</div>
        <div className={styles.login}>Sign Up</div>
      </div>
    </header>
  );
};

export default Header;

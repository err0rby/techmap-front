import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles.header_right}>
        <Link className={styles.linker} to={"user/signIn"}>
          <div className={styles.login}>Sign In</div>
        </Link>
        <Link className={styles.linker} to={"user/signUp"}>
          <div className={styles.login}>Sign Up</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

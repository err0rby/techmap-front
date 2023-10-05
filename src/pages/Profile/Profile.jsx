import React from "react";
import styles from "./profile.module.css";
import house from "../../assets/icons/house.svg";
import forms from "../../assets/icons/forms.svg";
import tables from "../../assets/icons/tables.png";
import list from "../../assets/icons/list.png";
import graphic from "../../assets/icons/graphic.png";
import { Outlet, Link, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  return (
    <div className={styles.profile}>
      <aside>
        <ul className={styles.list}>
          <li className={location.pathname === "/profile" ? styles.active : ""}>
            <Link to="/profile">
              <img src={house} alt="house" />
              <span>Моя доска</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/profile/forms" ? styles.active : ""
            }
          >
            <Link to="/profile/forms">
              <img src={forms} alt="forms" />
              <span>Формы</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/profile/tables" ? styles.active : ""
            }
          >
            <Link to="/profile/tables">
              <img src={tables} alt="tables" />
              <span>Таблица</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/profile/graphics" ? styles.active : ""
            }
          >
            <Link to="/profile/graphics">
              <img src={graphic} alt="graphic" />
              <span>Графики</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/profile/pages" ? styles.active : ""
            }
          >
            <Link to="/profile">
              <img src={list} alt="list" />
              <span>Страницы</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Profile;

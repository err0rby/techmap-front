import React from "react";
import styles from "./profileGraphic.module.css";
import Chart from "../Chart/Chart";

const ProfileGraphic = () => {
  return (
    <div className={styles.profileGraphic}>
      <Chart />
    </div>
  );
};

export default ProfileGraphic;

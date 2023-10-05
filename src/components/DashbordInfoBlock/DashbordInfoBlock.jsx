import React from "react";
import styles from "./dashbordInfoBlock.module.scss";

const DashbordInfoBlock = ({ img, head, desciption }) => {
  return (
    <div className={styles.dashbordInfoBlock}>
      <img src={img} alt="img" />
      <div>
        <h3>{head}</h3>
        <span>{desciption}</span>
      </div>
    </div>
  );
};

export default DashbordInfoBlock;

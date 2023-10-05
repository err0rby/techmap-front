import React from "react";
import styles from "./profileHome.module.scss";

import DashbordInfoBlock from "../DashbordInfoBlock/DashbordInfoBlock";
import game from "../../assets/icons/game.png";
import contacts from "../../assets/icons/contects.png";
import rating from "../../assets/icons/rating.png";
import ball from "../../assets/icons/ball.png";

const ProfileHome = () => {
  return (
    <div className={styles.profileHome}>
      <div className={styles.cards}>
        <DashbordInfoBlock
          img={game}
          head="2000"
          desciption="Колличество игр"
        />
        <DashbordInfoBlock img={contacts} head="2000" desciption="Контакты" />
        <DashbordInfoBlock img={rating} head="2000" desciption="Рейтинг" />
        <DashbordInfoBlock img={ball} head="2000" desciption="Баллы" />
      </div>
    </div>
  );
};

export default ProfileHome;

import React, { useEffect } from "react";
import styles from "./home.module.css";
import firstImg from "./phonesMap.png";
import euro from "./europeImg.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/courseSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const course = useSelector((state) => state.course.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.firstRod}>
        <div className={styles.leftChild}>
          <h1>
            <i>StudGeo</i>
          </h1>
          <h2>Здесь будет информация о наших курсах</h2>
          <h2>Начните изучать географию с нами</h2>
          <button className={styles.btn}>Начать обучение</button>
        </div>
        <div className={styles.rightChild}>
          <img src={firstImg} alt="a" />
        </div>
      </div>
      <div className={styles.fishText}>
        <h4>
          StudGeo Online предлагает девять различных игровых режимов, которые
          вызывают вас разными способами, чтобы помочь вам запомнить информацию
          и сделать процесс интересным. Кроме того, StudGeo Online обладает
          функцией озвучивания, которая позволяет вам слушать произношение
          названий мест.
        </h4>
        <h4>
          На данный момент StudGeo имеет более трех миллионов уникальных
          посетителей каждый месяц, и его популярность продолжает расти!
          Платформа доступна на более чем 40 языках и совместима с операционными
          системами Mac и Windows, а также с устройствами на iOS и Android.
        </h4>
        <h4>
          Всекартографические викторины можно настроить по вашему желанию, чтобы
          вы могли выбирать только те местоположения, на которых хотите провести
          викторину. Настраиваемые викторины легко можно делиться с вашими
          друзьями или учениками. Узнайте больше о настраиваемых викторинах.
        </h4>
      </div>
      <div className={styles.secondRod}>
        {course.map((item) => {
          return (
            <Link className={styles.linker} to={`/course/${item._id}`}>
              <img className={styles.blockImg} src={euro} alt="a" />
              <p>{item.title}</p>
              <p className={styles.textStyle}>{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

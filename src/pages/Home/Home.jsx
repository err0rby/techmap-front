import React, { useEffect } from 'react';
import styles from './home.module.css'
import firstImg from './phonesMap.png'
import euro from './europeImg.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../../features/courseSlice';

const Home = () => {

    const course = useSelector(state => state.course.courses)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch])


    return (
        <div>
            <div className={styles.firstRod}>
                <div className={styles.leftChild}>
                    <h1><i>StudGeo</i></h1>
                    <h2> here will be information about our courses</h2>
                    <h2>start study geography with us</h2>
                    <div className={styles.btnDiv}>
                        <button className={styles.btn}>start study</button>
                    </div>
                </div>
                <div className={styles.rightChild}>
                    <img src={firstImg} alt='a' />
                </div>
            </div>
            <div className={styles.secondRod}>
                {course.map(item => {
                    return <div className={styles.courseBlock}>
                        <img className={styles.blockImg} src={euro} alt='a' />
                        <p>{item.title}</p>
                        <p className={styles.textStyle}>{item.description}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import styles from './home.module.css'
import firstImg from './phonesMap.png'

const Home = () => {
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
                <div className={styles.courseBlock}>

                </div>
            </div>
        </div>
    );
};

export default Home;
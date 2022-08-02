import React from "react";
import TimeBox from "../components/TimeBox/TimeBox.jsx";

import styles from './EasySchedulePage.module.css'

const EasySchedulePage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.pageEnabled}>
                    <span className={styles.title}>Выберите график работы</span>
                    <span className={styles.text}>
                            Если Вы хотите более гибкий график,
                            воспользуйтесь вкладкой “Ежедневное расписание”
                        </span>
                    <TimeBox/>
                </div>
            </div>
        </div>
    );
};

export default EasySchedulePage;
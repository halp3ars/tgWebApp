import React from "react";
import TimeBox from "../components/TimeBox/TimeBox.jsx";

import styles from './EasySchedulePage.module.css'

const EasySchedulePage = (props) => {

    const {userData} = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.pageEnabled}>
                    <span className={styles.text}>
                            Если Вы хотите более гибкий график,
                            воспользуйтесь вкладкой “Ежедневное расписание”
                        </span>
                    <TimeBox userData={userData}/>
                </div>
            </div>
        </div>
    );
};

export default EasySchedulePage;
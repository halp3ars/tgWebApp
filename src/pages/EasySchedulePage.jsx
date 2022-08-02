import React, {useState} from "react";
import styles from './EasySchedulePage.module.css'
import '../assets/fonts/fonts.module.css'

import Arrow from '../../src/assets/imges/arrowIcon.svg'
import TabButton from "../components/TabButton/TabButton";
import TimeBox from "../components/TimeBox/TimeBox.jsx";

const EasySchedulePage = () => {
    const [pageActive, setPageActive] = useState(true)

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <a className={styles.linkBack} href="#"><img src={Arrow} alt=""/><span>Назад</span></a>
                    <TabButton
                        pageActive = {pageActive}
                        setPageActive = {setPageActive}
                    />
                    <div className={pageActive ? styles.pageEnabled : styles.pageDisabled}>
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
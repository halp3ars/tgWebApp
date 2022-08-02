import React from 'react';
import styles from "./typeTimetable.module.css"


const TypeTimetable = (props) => {
    const {pageActive, setPageActive} = props

    return (
        <div className={styles.typeTimetable}>
            <button type={'button'} onClick={() => setPageActive(false)}
                    className={!pageActive ? styles.dailyTimetableEnabled : styles.dailyTimetableDisabled}>
                Ежедневное расписание
            </button>
            <button type={'button'} onClick={() => setPageActive(true)}
                    className={pageActive ? styles.simpleTimetableEnabled : styles.simpleTimetableDisabled}>
                Простое расписание
            </button>
        </div>
    )
        ;
};

export default TypeTimetable;
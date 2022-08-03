import React, {useState} from "react";
import styles from "./schecule.module.css"
import DaysOfWeek from "./DaysOfWeek/daysOfWeek";
// import TypeTimetable from "../TypeTimetable/typeTimetable";



const Schecule = () => {

    return (
        <div className={styles.schecule}>
            <div className={styles.daysOfWeek}>
                <DaysOfWeek/>
            </div>
        </div>

    );
};

export default Schecule;
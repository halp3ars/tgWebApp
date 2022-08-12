import React, {useState} from "react";
import styles from "./schecule.module.css"
import DaysOfWeek from "./DaysOfWeek/daysOfWeek";
// import TypeTimetable from "../TypeTimetable/typeTimetable";



const Schecule = (props) => {

    const {userData} = props

    return (
        <div className={styles.schecule}>
            <div className={styles.daysOfWeek}>
                <DaysOfWeek userData={userData}/>
            </div>
        </div>

    );
};

export default Schecule;
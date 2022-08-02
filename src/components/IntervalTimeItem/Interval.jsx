import React from 'react';
import Plus from "../Access/Img/del.svg";

import styles from './Interval.module.css'

const Interval = (props) => {
    const {setValue, onDelete, id, value} = props

    const handleOnChange = (e, timeType) => {
        setValue(value.map((item) => {
            return item.id === id ? {...item, [timeType]: e.target.value} : item
        }))
    }
    return (
        <div className={styles.form}>
            <input
                id="TimeStart"
                type="time"
                name="time_start"
                onChange={(e) => handleOnChange(e, 'timeStart')}
                className={styles.timeStart}
            />
            <input
                id="TimeEnd"
                type="time"
                name="time_end"
                onChange={(e) => handleOnChange(e, 'timeEnd')}
                className={styles.timeEnd}
            />
            <button onClick={() => {
                onDelete(id)
            }} className={styles.btnDelete}><img src={Plus} alt=""/></button>
        </div>
    );
};

export default Interval;
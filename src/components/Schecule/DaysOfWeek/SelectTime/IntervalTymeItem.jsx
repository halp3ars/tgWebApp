import React, {Component} from 'react';
import {ReactComponent as DelButton} from "../../../Access/Img/del.svg"
import styles from "./IntervalTimeItem.module.css"

const IntervalTimeItem = (props) => {
    const {
        index,
        value,
        setValue,
        idItem,
        workTime,
        daysOfWeekId,
        startTime,
        endTime,
        prevEndTime,
        prevStartDate
    } = props


    const inputStartTime = (event) => {
        setValue(value.map((item) => {
            return item.id === daysOfWeekId ? {
                ...item, workTime: item.workTime.map((time) => {
                    return time.id === idItem ? {...time, timeStart: event.target.value} : time
                })
            } : item
        }))
    }

    const inputEndTime = (event) => {
        setValue(value.map((item) => {
            return item.id === daysOfWeekId ? {
                ...item, workTime: item.workTime.map((time) => {
                    return time.id === idItem ? {...time, timeEnd: event.target.value} : time
                })
            } : item
        }))
    }

    return (
        <div>
            <div className={styles.IntervalForm}>
                <input type="time" name="timeStart"
                       min={"07:00" && (idItem >= 1 ? String(prevEndTime) : '07:00')}
                       max="22:00"
                       id={idItem}
                       disabled={!value[daysOfWeekId].isActive || value[daysOfWeekId].workTime.length > index + 1}
                       onChange={(e) => inputStartTime(e)}
                    // onBlur={(e) => validationStartTime(e)}
                       required={value[daysOfWeekId].isActive}
                       className={styles.IntervalItem}/>
                <input type="time" name="timeEnd"
                       min={"8:00" && String(+startTime.slice(0,2)+1)+startTime.slice(2,5)} max="23:00"
                       disabled={!value[daysOfWeekId].isActive || value[daysOfWeekId].workTime.length > index + 1}
                       onChange={(e) => inputEndTime(e)}
                    // onBlur={(e) => validationEndTime(e)}
                       required={value[daysOfWeekId].isActive || value[daysOfWeekId].workTime.length > index + 1}
                       className={styles.IntervalItem}/>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (value[daysOfWeekId].workTime.length > 1) {
                            setValue(value.map((item) => item.id === daysOfWeekId ? {
                                ...item,
                                workTime: value[daysOfWeekId].workTime.filter((time) => time.id !== idItem)
                            } : item))
                        }
                    }}
                    className={idItem !== 0 && value[daysOfWeekId].isActive ? styles.delButtonActive : styles.delButtonNotActive}>
                    {/*<img src={DelButton} alt="del"/>*/}
                    <DelButton />
                </button>
            </div>
        </div>
    );
};

export default IntervalTimeItem;


import React, {useEffect, useRef, useState} from 'react';

import DelButton from "../../../Access/Img/del.svg"

import styles from "./IntervalTimeItem.module.css"


const IntervalTimeItem = (props) => {
    const {value, setValue, idItem, workTime, daysOfWeekId, startTime, endTime, buttonAddTime, buttonSubmit} = props


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

    const validationEndTime = (event) => {
        const timeStart = startTime.split(':')[0] * 60 + startTime.split(':')[1] * 1
        const timeEnd = endTime.split(':')[0] * 60 + endTime.split(':')[1] * 1
        if (value[daysOfWeekId].workTime[idItem].timeStart === "" || value[daysOfWeekId].workTime[idItem].timeEnd === "") {
            buttonSubmit.current.disabled = true
            buttonAddTime.current[daysOfWeekId].disabled = true
            setValue(value.map((item) => {
                return item.id === daysOfWeekId ? {
                    ...item, error: "Необходимо указать время работы"
                } : item
            }))
        } else if (timeStart > timeEnd) {
            buttonSubmit.current.disabled = true
            buttonAddTime.current[daysOfWeekId].disabled = true
            setValue(value.map((item) => {
                return item.id === daysOfWeekId ? {
                    ...item, error: "Время начала работы должно быть меньше времени окончания работы"
                } : item
            }))
        }

        // Проверка на время мин время работы(мин время на работу 60 мин)
        else if (timeEnd - timeStart < 60) {
            buttonSubmit.current.disabled = true
            buttonAddTime.current[daysOfWeekId].disabled = true
            setValue(value.map((item) => {
                return item.id === daysOfWeekId ? {
                    ...item, error: "Минимальное время работы составляет 1 час"
                } : item
            }))
        }

        // Проверка правильности начального времени
        else if (timeStart < 420 || timeStart > 1320) {
            buttonSubmit.current.disabled = true
            buttonAddTime.current[daysOfWeekId].disabled = true
            setValue(value.map((item) => {
                return item.id === daysOfWeekId ? {
                    ...item, error: "Время начала работы: 7:00"
                } : item
            }))
        }

        // Проверка правильности конечного времени
        else if (timeEnd < 480 || timeEnd > 1380) {
            buttonSubmit.current.disabled = true
            buttonAddTime.current[daysOfWeekId].disabled = true
            setValue(value.map((item) => {
                return item.id === daysOfWeekId ? {
                    ...item, error: "Время окончания работы: 23:00"
                } : item
            }))
        } else if (workTime.length >=2) {
            let timeLastEnd = workTime[idItem - 1].timeEnd.split(':')[0] * 60 + workTime[idItem - 1].timeEnd.split(':')[1] * 1
            if (timeStart < timeLastEnd){
                buttonSubmit.current.disabled = true
                buttonAddTime.current[daysOfWeekId].disabled = true
                setValue(value.map((item) => {
                    return item.id === daysOfWeekId ? {
                        ...item, error: "Новая смена не должна быть раньше предыдущих"
                    } : item
                }))
            }
        } else {
            buttonSubmit.current.disabled = false
            buttonAddTime.current[daysOfWeekId].disabled = false
            setValue(value.map((item) => {
                return item.id === daysOfWeekId ? {
                    ...item, error: ""
                } : item
            }))
        }
    }


    return (
        <div>
            <div className={styles.IntervalForm}>
                <input type="time" name="timeStart"
                       // min="07:00" max="22:00"
                       value={startTime}
                       disabled={!value[daysOfWeekId].isActive}
                       onChange={(e) => inputStartTime(e)}
                    // onBlur={(e) => validationStartTime(e)}
                       className={styles.IntervalItem}/>
                <input type="time" name="timeEnd"
                       // min="8:00" max="23:00"
                       value={endTime}
                       disabled={!value[daysOfWeekId].isActive}
                       onChange={(e) => inputEndTime(e)}
                       onBlur={(e) => validationEndTime(e)}
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
                    className={idItem !== 0 ? styles.delButtonActive : styles.delButtonNotActive}>
                    <img src={DelButton} alt="del"/>
                </button>
            </div>
            {/*<div className={styles.errors}>*/}
            {/*    {validationError.logicTime.error && validationError.logicTime.massage}*/}
            {/*</div>*/}
        </div>


    );
};

export default IntervalTimeItem;


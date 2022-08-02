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
        if (startTime === "" || endTime === "") {
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

        // if (time.id) {
        //     let timeLastEnd = daysOfWeek.workTime[time.id - 1].timeEnd.split(':')[0] * 60 + daysOfWeek.workTime[time.id - 1].timeEnd.split(':')[1] * 1
        //     console.log(timeLastEnd)
        //     console.log(timeStart)
        //     if (timeStart < timeLastEnd) {
        //         validationError.intersection.error = true
        //     }
        // }
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


// setValue(value.map((daysOfWeek) => {
//     daysOfWeek.workTime.map((time) => {
//         const timeStart = time.timeStart.split(':')[0] * 60 + time.timeStart.split(':')[1] * 1
//         const timeEnd = time.timeEnd.split(':')[0] * 60 + time.timeEnd.split(':')[1] * 1
//         // Проверка на пустые значения строк
//         if (time.timeStart === "" || time.timeEnd === "") {
//             // alert(validationError.isEmpty.massage)
//             console.log(event)
//         }
//     })
// }))

//     // Проверка на пустые значения строк
//     if (time.timeStart === "" || time.timeEnd === "") {
//         // alert(validationError.isEmpty.massage)
//         console.log(event)
//     }
// })}

// // Проверка на логику 1-е время < 2-го
// if (timeStart > timeEnd) {
//     // alert(validationError.logicTime.massage)
//     validationError.logicTime.error = true
// }
//
// // Проверка на время мин время работы(мин время на работу 60 мин)
// if (timeEnd - timeStart < 60) {
//     // alert(validationError.minWorkTime.massage)
//     validationError.minWorkTime.error = true
// }
//
// // Проверка правильности начального времени
// if (timeStart < 420 || timeStart > 1320) {
//     // alert(validationError.startWorkTime.massage)
//     validationError.startWorkTime.error = true
// }
//
// // Проверка правильности конечного времени
// if (timeEnd < 480 || timeEnd > 1380) {
//     // alert(validationError.endWorkTime.massage)
//     validationError.endWorkTime.error = true
// }
//
// if (time.id) {
//     let timeLastEnd = daysOfWeek.workTime[time.id - 1].timeEnd.split(':')[0] * 60 + daysOfWeek.workTime[time.id - 1].timeEnd.split(':')[1] * 1
//     console.log(timeLastEnd)
//     console.log(timeStart)
//     if (timeStart < timeLastEnd) {
//         validationError.intersection.error = true
//     }
// }


// const [validationError, setValidationError] = useState({
//     isEmpty: {
//         id: 0,
//         error: false,
//         massage: "Необходимо указать время работы",
//     },
//     logicTime: {
//         id: 1,
//         error: false,
//         massage: "Время начала работы должно быть меньше времени окончания работы",
//     },
//     minWorkTime: {
//         id: 2,
//         error: false,
//         massage: "Минимальное время работы составляет 1 час"
//     },
//     startWorkTime: {
//         id: 3,
//         error: false,
//         massage: "Время начала работы: 7:00 - 22:00"
//     },
//     endWorkTime: {
//         id: 4,
//         error: false,
//         massage: "Время окончания работы: 8:00 - 23:00"
//     }
// })

// const validationErrors = (event, daysOfWeek) => {
//     daysOfWeek.workTime.map((time) => {
//         const timeStart = time.timeStart.split(':')[0] * 60 + time.timeStart.split(':')[1] * 1
//         const timeEnd = time.timeEnd.split(':')[0] * 60 + time.timeEnd.split(':')[1] * 1
//
//         // Проверка на пустые значения строк
//         if (time.timeStart === "" || time.timeEnd === "") {
//             setInterval(interval.map((item) => item.id == event.target.name ? {
//                 ...item,
//                 error: 'Необходимо указать время работы'
//             } : item))
//         }
//
//         // Проверка на логику 1-е время < 2-го
//         if (timeStart > timeEnd) {
//             setValidationError({...validationError, logicTime: {...validationError.logicTime, error: true}})
//         }
//
//         // Проверка на время мин время работы(мин время на работу 60 мин)
//         if (timeEnd - timeStart < 60) {
//             setValidationError({...validationError, minWorkTime: {...validationError.minWorkTime, error: true}})
//         }
//
//         // Проверка правильности начального времени
//         if (timeStart < 420 || timeStart > 1320) {
//             setValidationError({...validationError, startWorkTime: {...validationError.startWorkTime, error: true}})
//         }
//
//         // Проверка правильности конечного времени
//         if (timeEnd < 480 || timeEnd > 1380) {
//             setValidationError({...validationError, endWorkTime: {...validationError.endWorkTime, error: true}})
//         }
//         return validationError;
//     })
// }

// useEffect(() => {
//     if (value[daysOfWeekId].workTime[id].timeStart !== '' && value[daysOfWeekId].workTime[id].timeEnd !== '') {
//         const timeStart = value[daysOfWeekId].workTime[id].timeStart.split(':')[0] * 60 + value[daysOfWeekId].workTime[id].timeStart.split(':')[1] * 1
//         const timeEnd = value[daysOfWeekId].workTime[id].timeEnd.split(':')[0] * 60 + value[daysOfWeekId].workTime[id].timeEnd.split(':')[1] * 1
//         // Проверка на пустые значения строк
//
//         // Проверка на логику 1-е время < 2-го
//         if (timeStart > timeEnd) {
//             // setValue(value.map((item) => item.id == id ? {
//             //     ...value[id], error: 'asdfasf'
//             // } : item))
//             setValidationError({...validationError, logicTime: {...validationError.logicTime, error: true}})
//         }
//
//         // Проверка на время мин время работы(мин время на работу 60 мин)
//         if (timeEnd - timeStart < 60) {
//             // setValidationError({...validationError, minWorkTime: {...validationError.minWorkTime, error: true}})
//         }
//
//         // Проверка правильности начального времени
//         if (timeStart < 420 || timeStart > 1320) {
//             setValidationError({...validationError, startWorkTime: {...validationError.startWorkTime, error: true}})
//         }
//
//         // Проверка правильности конечного времени
//         if (timeEnd < 480 || timeEnd > 1380) {
//             setValidationError({...validationError, endWorkTime: {...validationError.endWorkTime, error: true}})
//         }
//     }
// }, [value[daysOfWeekId].workTime])
// import React, {useEffect, useState, useRef} from 'react';
//
// import DelButton from "../../../Access/Img/del.svg"
//
// import styles from "./IntervalTimeItem.module.css"
//
//
// const IntervalTimeItem = (props) => {
//     const {value, setValue, daysOfWeekId, id, startTime, endTime, validationError, setValidationError} = props
//
//     const inputStartTime = (event) => {
//         setValue(value.map((item) => {
//             return item.id === daysOfWeekId ? {
//                 ...item, workTime: item.workTime.map((time) => {
//                     return time.id === id ? {...time, timeStart: event.target.value} : time
//                 })
//             } : item
//         }))
//     }
//
//     const inputEndTime = (event) => {
//         setValue(value.map((item) => {
//             return item.id === daysOfWeekId ? {
//                 ...item, workTime: item.workTime.map((time) => {
//                     return time.id === id ? {...time, timeEnd: event.target.value} : time
//                 })
//             } : item
//         }))
//     }
//
//
//     // useEffect(() => {
//     //     value.map((daysOfWeek) => {
//     //         daysOfWeek.workTime.map((time) => {
//     //             const timeStart = time.timeStart.split(':')[0] * 60 + time.timeStart.split(':')[1] * 1
//     //             const timeEnd = time.timeEnd.split(':')[0] * 60 + time.timeEnd.split(':')[1] * 1
//     //
//     //
//     //             // Проверка на логику 1-е время < 2-го
//     //             if (timeStart > timeEnd) {
//     //                 setValue(value.map((item) => {
//     //                     return item.id === daysOfWeekId ? {
//     //                         ...item, error: "Время начала работы должно быть меньше времени окончания работы"
//     //                     } : item
//     //
//     //                 }))
//     //             }
//     //             console.log(value)
//
//                 // Проверка на время мин время работы(мин время на работу 60 мин)
//                 // if (timeEnd - timeStart < 60) {
//                 //     // enabledAdd = false
//                 //     setValue(value.map((item) => {
//                 //         return item.id === daysOfWeekId ? {
//                 //             ...item, error: "Минимальное время работы составляет 1 час"
//                 //         } : item
//                 //     }))
//                 //
//                 // }
//                 //
//                 // // Проверка правильности начального времени
//                 // if (timeStart < 420 || timeStart > 1320) {
//                 //     setValue(value.map((item) => {
//                 //         return item.id === daysOfWeekId ? {
//                 //             ...item, error: "Время начала работы: 7:00 - 22:00"
//                 //         } : item
//                 //     }))
//                 // }
//                 //
//                 // // Проверка правильности конечного времени
//                 // if (timeEnd < 480 || timeEnd > 1380) {
//                 //     // enabledAdd = false
//                 //     setValue(value.map((item) => {
//                 //         return item.id === daysOfWeekId ? {
//                 //             ...item, error: "Время окончания работы: 8:00 - 23:00"
//                 //         } : item
//                 //     }))
//                 // }
//                 // // Проверка: Время начала новой смены не должно быть раньше других смен
//                 // if (daysOfWeek.workTime.id > 0) {
//                 //     let timeLastEnd = daysOfWeek.workTime.id[id - 1].timeEnd.split(':')[0] * 60 + daysOfWeek.workTime.id[id - 1].timeEnd.split(':')[1] * 1
//                 //     if (timeStart < timeLastEnd) {
//                 //         setValue(value.map((item) => {
//                 //             return item.id === daysOfWeekId ? {
//                 //                 ...item, error: "Время начала новой смены не должно быть раньше других смен"
//                 //             } : item
//                 //         }))
//                 //     }
//                 // }
//     //         })
//     //     })
//     // }, [startTime])
//
//     //
//     // useEffect(() => {
//     //         value.map((item) => {
//     //             return item.id === daysOfWeekId ? {
//     //                 ...item, workTime: item.workTime.map((time) => {
//     //                     return time.id === id ? {...time, error: "test"} : time
//     //                 })
//     //             } : item
//     //
//     //         })
//     //     }, [value]
//     // )
//
//     // let enabledAdd = true
//     // if (time.timeStart !== '' && time.endTime !== '') {
//     //     const timeStart = daysOfWeek.workTime[0].timeStart.split(':')[0] * 60 + daysOfWeek.workTime[0].timeStart.split(':')[1] * 1
//     //     const timeEnd = daysOfWeek.workTime[0].timeEnd.split(':')[0] * 60 + daysOfWeek.workTime[0].timeEnd.split(':')[1] * 1
//     //     // console.log(timeStart)
//     //     // console.log(timeEnd)
//     //     // Проверка на пустые значения строк
//     //     // Проверка на логику 1-е время < 2-го
//     //     if (timeStart > timeEnd) {
//     //         // enabledAdd = false
//     //         // console.log(timeStart)
//     //         // console.log(timeEnd)
//     //     }
//
//     // Проверка на время мин время работы(мин время на работу 60 мин)
//     // if (timeEnd - timeStart < 60) {
//     //     // enabledAdd = false
//     //     setValue(value.map((item) => {
//     //         return item.id === daysOfWeekId ? {
//     //             ...item, error: "Минимальное время работы составляет 1 час"
//     //         } : item
//     //     }))
//     //
//     // }
//     //
//     // // Проверка правильности начального времени
//     // if (timeStart < 420 || timeStart > 1320) {
//     //     setValue(value.map((item) => {
//     //         return item.id === daysOfWeekId ? {
//     //             ...item, error: "Время начала работы: 7:00 - 22:00"
//     //         } : item
//     //     }))
//     // }
//     //
//     // // Проверка правильности конечного времени
//     // if (timeEnd < 480 || timeEnd > 1380) {
//     //     // enabledAdd = false
//     //     setValue(value.map((item) => {
//     //         return item.id === daysOfWeekId ? {
//     //             ...item, error: "Время окончания работы: 8:00 - 23:00"
//     //         } : item
//     //     }))
//     // }
//     return (
//         <div>
//             <div className={styles.IntervalForm}>
//                 <input type="time" name="timeStart" min="07:00" max="22:00"
//                        disabled={!value[daysOfWeekId].isActive}
//                        value={startTime}
//                        onChange={(e) => inputStartTime(e)}
//                        className={styles.IntervalItem}/>
//                 <input type="time" name="timeEnd" min="8:00" max="23:00"
//                        disabled={!value[daysOfWeekId].isActive}
//                        value={endTime}
//                        onChange={(e) => inputEndTime(e)}
//                        className={styles.IntervalItem}/>
//
//                 <button type={'button'}
//                         onClick={(e) => {
//                             e.preventDefault();
//                             if (value[daysOfWeekId].workTime.length > 1) {
//                                 setValue(value.map((item) => item.id === daysOfWeekId ?
//                                     {
//                                         ...item,
//                                         workTime: value[daysOfWeekId].workTime.filter((time) => time.id !== id)
//                                     } :
//                                     item
//                                 ))
//                             }
//                         }}
//                         className={id !== 0 ? styles.delButtonActive : styles.delButtonNotActive}>
//                     <img src={DelButton} alt="del"/>
//                 </button>
//             </div>
//         </div>
//     );
// };
//
//
// //TODO webkit
//
// export default IntervalTimeItem;
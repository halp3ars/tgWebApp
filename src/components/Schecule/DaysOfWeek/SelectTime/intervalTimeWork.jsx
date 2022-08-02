// import React, {useEffect, useState} from 'react';
//
// import DelButton from "../../../Access/Img/del.svg"
//
// import styles from "./IntervalTimeItem.module.css"
//
//
// const IntervalTimeItem = (props) => {
//     const {value, setValue, id, daysOfWeekId} = props
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
//     // const [validationError, setValidationError] = useState({
//     //     isEmpty: {
//     //         id: 0,
//     //         error: false,
//     //         massage: "Необходимо указать время работы",
//     //     },
//     //     logicTime: {
//     //         id: 1,
//     //         error: false,
//     //         massage: "Время начала работы должно быть меньше времени окончания работы",
//     //     },
//     //     minWorkTime: {
//     //         id: 2,
//     //         error: false,
//     //         massage: "Минимальное время работы составляет 1 час"
//     //     },
//     //     startWorkTime: {
//     //         id: 3,
//     //         error: false,
//     //         massage: "Время начала работы: 7:00 - 22:00"
//     //     },
//     //     endWorkTime: {
//     //         id: 4,
//     //         error: false,
//     //         massage: "Время окончания работы: 8:00 - 23:00"
//     //     }
//     // })
//
//     // const validationErrors = (event, daysOfWeek) => {
//     //     daysOfWeek.workTime.map((time) => {
//     //         const timeStart = time.timeStart.split(':')[0] * 60 + time.timeStart.split(':')[1] * 1
//     //         const timeEnd = time.timeEnd.split(':')[0] * 60 + time.timeEnd.split(':')[1] * 1
//     //
//     //         // Проверка на пустые значения строк
//     //         if (time.timeStart === "" || time.timeEnd === "") {
//     //             setInterval(interval.map((item) => item.id == event.target.name ? {
//     //                 ...item,
//     //                 error: 'Необходимо указать время работы'
//     //             } : item))
//     //         }
//     //
//     //         // Проверка на логику 1-е время < 2-го
//     //         if (timeStart > timeEnd) {
//     //             setValidationError({...validationError, logicTime: {...validationError.logicTime, error: true}})
//     //         }
//     //
//     //         // Проверка на время мин время работы(мин время на работу 60 мин)
//     //         if (timeEnd - timeStart < 60) {
//     //             setValidationError({...validationError, minWorkTime: {...validationError.minWorkTime, error: true}})
//     //         }
//     //
//     //         // Проверка правильности начального времени
//     //         if (timeStart < 420 || timeStart > 1320) {
//     //             setValidationError({...validationError, startWorkTime: {...validationError.startWorkTime, error: true}})
//     //         }
//     //
//     //         // Проверка правильности конечного времени
//     //         if (timeEnd < 480 || timeEnd > 1380) {
//     //             setValidationError({...validationError, endWorkTime: {...validationError.endWorkTime, error: true}})
//     //         }
//     //         return validationError;
//     //     })
//     // }
//
//     // useEffect(() => {
//     //     if (value[daysOfWeekId].workTime[id].timeStart !== '' && value[daysOfWeekId].workTime[id].timeEnd !== '') {
//     //         const timeStart = value[daysOfWeekId].workTime[id].timeStart.split(':')[0] * 60 + value[daysOfWeekId].workTime[id].timeStart.split(':')[1] * 1
//     //         const timeEnd = value[daysOfWeekId].workTime[id].timeEnd.split(':')[0] * 60 + value[daysOfWeekId].workTime[id].timeEnd.split(':')[1] * 1
//     //         // Проверка на пустые значения строк
//     //
//     //         // Проверка на логику 1-е время < 2-го
//     //         if (timeStart > timeEnd) {
//     //             // setValue(value.map((item) => item.id == id ? {
//     //             //     ...value[id], error: 'asdfasf'
//     //             // } : item))
//     //             setValidationError({...validationError, logicTime: {...validationError.logicTime, error: true}})
//     //         }
//     //
//     //         // Проверка на время мин время работы(мин время на работу 60 мин)
//     //         if (timeEnd - timeStart < 60) {
//     //             // setValidationError({...validationError, minWorkTime: {...validationError.minWorkTime, error: true}})
//     //         }
//     //
//     //         // Проверка правильности начального времени
//     //         if (timeStart < 420 || timeStart > 1320) {
//     //             setValidationError({...validationError, startWorkTime: {...validationError.startWorkTime, error: true}})
//     //         }
//     //
//     //         // Проверка правильности конечного времени
//     //         if (timeEnd < 480 || timeEnd > 1380) {
//     //             setValidationError({...validationError, endWorkTime: {...validationError.endWorkTime, error: true}})
//     //         }
//     //     }
//     // }, [value[daysOfWeekId].workTime])
//
//     return (
//         <div>
//             <div className={styles.IntervalForm}>
//                 <input type="time" name="timeStart" min="07:00" max="22:00"
//                        disabled={!value[daysOfWeekId].isActive}
//                        onChange={(e) => inputStartTime(e)}
//                        className={styles.IntervalItem}/>
//                 <input type="time" name="timeEnd" min="8:00" max="23:00"
//                        disabled={!value[daysOfWeekId].isActive}
//                        onChange={(e) => inputEndTime(e)}
//                        className={styles.IntervalItem}/>
//                 <button
//                     onClick={(e) => {
//                         e.preventDefault();
//                         if (value[daysOfWeekId].workTime.length > 1) {
//                             setValue(value.map((item) => item.id === daysOfWeekId ?
//                                 {...item, workTime: value[daysOfWeekId].workTime.filter((time) => time.id !== id)} :
//                                 item
//                             ))
//                         }
//                     }}
//                     className={id !== 0 ? styles.delButtonActive : styles.delButtonNotActive}>
//                     <img src={DelButton} alt="del"/>
//                 </button>
//             </div>
//             {/*<div className={styles.errors}>*/}
//             {/*    {validationError.logicTime.error && validationError.logicTime.massage}*/}
//             {/*</div>*/}
//         </div>
//
//
//     );
// };
//
//
// //TODO webkit
//
// export default IntervalTimeItem;
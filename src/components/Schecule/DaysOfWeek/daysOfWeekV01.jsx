// import React, {useEffect, useState} from 'react';
// import styles from "./daysOfWeek.module.css"
//
// import linear from "../../Access/Img/linear.svg"
// import liPlus, {ReactComponent as Plus} from "../../Access/Img/li_plus.svg"
// import IntervalTimeItem from "./SelectTime/intervalTimeV01";
//
//
// const DaysOfWeek = () => {
//
//     const [interval, setInterval] = useState([{
//         id: 0,
//         title: "ПН",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: '',
//         }],
//     }, {
//         id: 1,
//         title: "ВТ",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: ''
//         },],
//     }, {
//         id: 2,
//         title: "СР",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: ''
//         },],
//     }, {
//         id: 3,
//         title: "ЧТ",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: ''
//         },],
//     }, {
//         id: 4,
//         title: "ПТ",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: ''
//         },],
//     }, {
//         id: 5,
//         title: "СБ",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: ''
//         },],
//     }, {
//         id: 6,
//         title: "ВС",
//         isActive: true,
//         error: '',
//         workTime: [{
//             id: 0,
//             timeStart: '',
//             timeEnd: ''
//         },],
//     },])
//
//
//     const [validationError, setValidationError] = useState({
//         isEmpty: {
//             id: 0,
//             error: false,
//             massage: "Необходимо указать время работы",
//         },
//         logicTime: {
//             id: 1,
//             error: false,
//             massage: "Время начала работы должно быть меньше времени окончания работы",
//         },
//         minWorkTime: {
//             id: 2,
//             error: false,
//             massage: "Минимальное время работы составляет 1 час"
//         },
//         startWorkTime: {
//             id: 3,
//             error: false,
//             massage: "Время начала работы: 7:00 - 22:00"
//         },
//         endWorkTime: {
//             id: 4,
//             error: false,
//             massage: "Время окончания работы: 8:00 - 23:00"
//         }
//     })
//     const validationErrors = (event, daysOfWeek) => {
//         daysOfWeek.workTime.map((time) => {
//
//             const timeStart = time.timeStart.split(':')[0] * 60 + time.timeStart.split(':')[1] * 1
//             const timeEnd = time.timeEnd.split(':')[0] * 60 + time.timeEnd.split(':')[1] * 1
//
//             // Проверка на пустые значения строк
//             if (time.timeStart === "" || time.timeEnd === "") {
//                 console.log(event.target.name)
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: 'Необходимо указать время работы'
//                 } : item))
//             } else {
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: ''
//                 } : item))
//             }
//
//             if (timeStart > timeEnd) {
//                 console.log(event.target.name)
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: 'Время начала работы должно быть меньше времени окончания работы'
//                 } : item))
//             } else {
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: ''
//                 } : item))
//             }
//
//             if (timeEnd - timeStart < 60) {
//                 console.log(event.target.name)
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: 'Минимальное время работы составляет 1 час'
//                 } : item))
//             } else {
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: ''
//                 } : item))
//             }
//
//             if (timeStart < 420 || timeStart > 1320) {
//                 console.log(event.target.name)
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: 'Время начала работы: 7:00 - 22:00'
//                 } : item))
//             } else {
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: ''
//                 } : item))
//             }
//
//             if (timeEnd < 480 || timeEnd > 1380) {
//                 console.log(event.target.name)
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: 'Время окончания работы: 8:00 - 23:00'
//                 } : item))
//             } else {
//                 setInterval(interval.map((item) => item.id == event.target.name ? {
//                     ...item, error: ''
//                 } : item))
//             }
//             // Проверка на логику 1-е время < 2-го
//             // if (timeStart > timeEnd) {
//             //     setValidationError({...validationError, logicTime: {...validationError.logicTime, error: true}})
//             // }
//             //
//             // // Проверка на время мин время работы(мин время на работу 60 мин)
//             // if (timeEnd - timeStart < 60) {
//             //     setValidationError({...validationError, minWorkTime: {...validationError.minWorkTime, error: true}})
//             // }
//             //
//             // // Проверка правильности начального времени
//             // if (timeStart < 420 || timeStart > 1320) {
//             //     setValidationError({...validationError, startWorkTime: {...validationError.startWorkTime, error: true}})
//             // }
//             //
//             // // Проверка правильности конечного времени
//             // if (timeEnd < 480 || timeEnd > 1380) {
//             //     setValidationError({...validationError, endWorkTime: {...validationError.endWorkTime, error: true}})
//             // }
//             return validationError;
//         })
//     }
//
//
//     function validation(event, daysOfWeek) {
//         event.preventDefault();
//         validationErrors(event, daysOfWeek)
//         let errorValid = false
//         for (let key in validationError) {
//             if (validationError[key].error === true) {
//                 errorValid = true;
//                 break;
//             }
//         }
//         if ((daysOfWeek.workTime.length === 4) /*|| (errorValid)*/) {
//             const button = document.querySelectorAll('.btnAdd_time')
//             button.disabled = false
//         } else {
//             setInterval(interval.map((item) => {
//                 return item.id == event.target.name ? {
//                     ...item, workTime: [...item.workTime, {
//                         id: item.workTime.length, timeStart: '', timeEnd: ''
//                     }]
//                 } : item
//             }))
//         }
//     }
//
//     return (
//         <div className={styles.daysOfWeek}>
//             {interval.map(daysOfWeek => (
//                 <div key={daysOfWeek.id} className={styles.onOfDaysItem}>
//                     <div className={daysOfWeek.isActive ? styles.oneOfDaysEnable : styles.oneOfDaysDisable}>
//                         <div className={styles.onOfDays}>
//                             <button
//                                 onClick={() => {
//                                     setInterval(interval.map((item) => item.id === daysOfWeek.id ? {
//                                         ...item,
//                                         isActive: !item.isActive
//                                     } : item))
//                                 }}
//                                 className={daysOfWeek.isActive ? styles.onOfDaysTitleActive : styles.onOfDaysTitleNotActive}
//                                 key={daysOfWeek.id}>
//                                 {daysOfWeek.title}
//                             </button>
//                             <div
//                                 className={daysOfWeek.isActive ? styles.oneOfDaysTimeActive : styles.oneOfDaysTimeNotActive}>
//                                 <form id="intervalTimes">
//                                     {daysOfWeek.workTime.map((item) => (
//                                         <IntervalTimeItem
//                                             key={item.id + Math.random()}
//                                             value={interval}
//                                             setValue={setInterval}
//                                             daysOfWeekId={daysOfWeek.id}
//                                             id={item.id}
//                                             startTime={item.timeStart}
//                                             endTime={item.timeEnd}
//                                             validationError={validationError}
//                                             setValidationError={setValidationError}
//                                         />))}
//                                 </form>
//                             </div>
//                         </div>
//                         <div className={styles.errors}>
//                             <span>{daysOfWeek.error}</span>
//                         </div>
//
//                         <button form="intervalTimes"
//                                 name={daysOfWeek.id}
//                                 onClick={
//                                     (event) => {
//                                         validation(event, daysOfWeek)
//                                     }
//                                 }
//                                 className={daysOfWeek.isActive ? styles.addTimeActive : styles.addTimeNotActive}>
//                             <Plus/>
//                             Добавить время
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>);
// };
//
// export default DaysOfWeek;
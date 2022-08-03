import React, {useEffect, useRef, useState} from 'react';
import styles from "./daysOfWeek.module.css"

import linear from "../../Access/Img/linear.svg"
import liPlus, {ReactComponent as Plus} from "../../Access/Img/li_plus.svg"
import IntervalTimeItem from "./SelectTime/IntervalTymeItem";
import header from "../../Header/Header";



const DaysOfWeek = () => {

    const [interval, setInterval] = useState([{
        id: 0,
        title: "ПН",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    }, {
        id: 1,
        title: "ВТ",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    }, {
        id: 2,
        title: "СР",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    }, {
        id: 3,
        title: "ЧТ",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    }, {
        id: 4,
        title: "ПТ",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    }, {
        id: 5,
        title: "СБ",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    }, {
        id: 6,
        title: "ВС",
        isActive: false,
        error: '',
        workTime: [{
            id: 0,
            timeStart: '',
            timeEnd: ''
        },],
    },])


    const validationError = {
        isEmpty: {
            id: 0,
            error: false,
            massage: "Необходимо указать время работы",
        },
        logicTime: {
            id: 1,
            error: false,
            massage: "Время начала работы должно быть меньше времени окончания работы",
        },
        minWorkTime: {
            id: 2,
            error: false,
            massage: "Минимальное время работы составляет 1 час"
        },
        startWorkTime: {
            id: 3,
            error: false,
            massage: "Время начала работы: 7:00"
        },
        endWorkTime: {
            id: 4,
            error: false,
            massage: "Время окончания работы: 23:00"
        },
        intersection: {
            id: 5,
            error: false,
            massage: "Время начала новой смены не должно пересекаться со старыми"
        }
    }


    function validation(event, daysOfWeek) {
        event.preventDefault();
        // validationErrors(event, daysOfWeek)
        // let errorValid = false
        // for (let key in validationError) {
        //     if (validationError[key].error === true) {
        //         alert(validationError[key].massage)
        //         errorValid = true;
        //         break;
        //     }
        // }
        if ((daysOfWeek.workTime.length === 4) /*|| (errorValid))*/) {

        } else {
            setInterval(interval.map((item) => {
                return item.id == event.target.name ? {
                    ...item, workTime: [...item.workTime, {
                        id: item.workTime.length, timeStart: '', timeEnd: ''
                    }]
                } : item
            }))
        }
    }

    const periodOfWorks =
        [
            {
                firstIntervalFrom: 0,
                firstIntervalTo: 0,
                secondIntervalFrom: 0,
                secondIntervalTo: 0,
                thirdIntervalFrom: 0,
                thirdIntervalTo: 0,
                fourthIntervalFrom: 0,
                fourthIntervalTo: 0,
                day: "Понедельник"
            }, {
            firstIntervalFrom: 0,
            firstIntervalTo: 0,
            secondIntervalFrom: 0,
            secondIntervalTo: 0,
            thirdIntervalFrom: 0,
            thirdIntervalTo: 0,
            fourthIntervalFrom: 0,
            fourthIntervalTo: 0,
            day: "Вторник"
        }, {
            firstIntervalFrom: 0,
            firstIntervalTo: 0,
            secondIntervalFrom: 0,
            secondIntervalTo: 0,
            thirdIntervalFrom: 0,
            thirdIntervalTo: 0,
            fourthIntervalFrom: 0,
            fourthIntervalTo: 0,
            day: "Среда"
        }, {
            firstIntervalFrom: 0,
            firstIntervalTo: 0,
            secondIntervalFrom: 0,
            secondIntervalTo: 0,
            thirdIntervalFrom: 0,
            thirdIntervalTo: 0,
            fourthIntervalFrom: 0,
            fourthIntervalTo: 0,
            day: "Четверг"
        }, {
            firstIntervalFrom: 0,
            firstIntervalTo: 0,
            secondIntervalFrom: 0,
            secondIntervalTo: 0,
            thirdIntervalFrom: 0,
            thirdIntervalTo: 0,
            fourthIntervalFrom: 0,
            fourthIntervalTo: 0,
            day: "Пятница"
        }, {
            firstIntervalFrom: 0,
            firstIntervalTo: 0,
            secondIntervalFrom: 0,
            secondIntervalTo: 0,
            thirdIntervalFrom: 0,
            thirdIntervalTo: 0,
            fourthIntervalFrom: 0,
            fourthIntervalTo: 0,
            day: "Суббота"
        }, {
            firstIntervalFrom: 0,
            firstIntervalTo: 0,
            secondIntervalFrom: 0,
            secondIntervalTo: 0,
            thirdIntervalFrom: 0,
            thirdIntervalTo: 0,
            fourthIntervalFrom: 0,
            fourthIntervalTo: 0,
            day: "Воскресенье"
        }
        ]


    const postTelegram = (e) => {
        e.preventDefault()
        const mas = interval.map((inter, index) => (
                inter.isActive ? (
                    periodOfWorks[index].firstIntervalFrom = inter.workTime[0].timeStart !== '' ?
                        (inter.workTime[0].timeStart).slice(0, 2) : 0,
                        periodOfWorks[index].firstIntervalTo = inter.workTime[0].timeEnd !== '' ?
                            (inter.workTime[0].timeEnd).slice(0, 2) : 0,
                        inter.workTime.length >= 2 ?
                            (periodOfWorks[index].secondIntervalFrom = inter.workTime[1].timeStart != '' ?
                                (inter.workTime[1].timeStart).slice(0, 2) : 0,
                                periodOfWorks[index].secondIntervalTo = inter.workTime[1].timeEnd != '' ?
                                    (inter.workTime[1].timeEnd).slice(0, 2) : 0) : inter.workTime.length >= 3 ?
                                (periodOfWorks[index].thirdIntervalFrom = inter.workTime[2].timeStart != '' ?
                                    (inter.workTime[2].timeStart).slice(0, 2) : 0,
                                    periodOfWorks[index].thirdIntervalTo = inter.workTime[2].timeEnd != '' ?
                                        (inter.workTime[2].timeEnd).slice(0, 2) : 0) : inter.workTime.length >= 4 &&
                                (periodOfWorks[index].fourthIntervalFrom = inter.workTime[3].timeStart != '' ?
                                    (inter.workTime[3].timeStart).slice(0, 2) : 0,
                                    periodOfWorks[index].fourthIntervalTo = inter.workTime[3].timeEnd != '' ?
                                        (inter.workTime[3].timeEnd).slice(0, 2) : 0)) : null
            )
        )
        const data = periodOfWorks.filter((item) => item.firstIntervalFrom != '')
        console.log({periodOfWorks: data})
        fetch('', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({periodOfWorks: data}),
            }
        ).then(res => {
            // window.location.href = "https://t.me/BeautyEyelashesBot"
        })

    }

    const buttonAddTime = useRef([])
    const buttonSubmit = useRef()
    let tg = window.Telegram.WebApp;
    tg.MainButton.color = "#143F6B";


    return (
        <div className={styles.daysOfWeek}>
            {interval.map(daysOfWeek => (
                <div key={daysOfWeek.id} className={styles.onOfDaysItem}>
                    <div className={daysOfWeek.isActive ? styles.oneOfDaysEnable : styles.oneOfDaysDisable}>
                        <div className={styles.onOfDays}>
                            <button
                                onClick={() => {
                                    setInterval(interval.map((item) => item.id === daysOfWeek.id ? {
                                        ...item,
                                        isActive: !item.isActive
                                    } : item))
                                }}
                                className={daysOfWeek.isActive ? styles.onOfDaysTitleActive : styles.onOfDaysTitleNotActive}
                                key={daysOfWeek.id}>
                                {daysOfWeek.title}
                            </button>
                            <div
                                className={daysOfWeek.isActive ? styles.oneOfDaysTimeActive : styles.oneOfDaysTimeNotActive}>
                                <form id="intervalTimes">
                                    {daysOfWeek.workTime.map((item) => (
                                        <IntervalTimeItem key={item.id + Math.random()}
                                                          value={interval}
                                                          setValue={setInterval}
                                                          daysOfWeekId={daysOfWeek.id}
                                                          idItem={item.id}
                                                          workTime={daysOfWeek.workTime}
                                                          startTime={item.timeStart}
                                                          endTime={item.timeEnd}
                                                          buttonAddTime={buttonAddTime}
                                                          buttonSubmit={buttonSubmit}

                                        />))}
                                </form>
                            </div>
                        </div>
                        <div className={daysOfWeek.isActive ? styles.errorEnabled : styles.errorDisabled}>
                             <span>
                                 {daysOfWeek.error}
                            </span>
                        </div>

                        <button form="intervalTimes"
                            // disabled={true}
                                name={daysOfWeek.id}
                                ref={(ref) => buttonAddTime.current.push(ref)}
                                onClick={
                                    (event) => {
                                        validation(event, daysOfWeek)
                                    }
                                }
                                className={daysOfWeek.isActive ? styles.addTimeActive : styles.addTimeNotActive}>
                            <Plus/>
                            Добавить время
                        </button>
                    </div>
                </div>
            ))}
            <div>
                <button
                    form="intervalTimes"
                    type='submit'
                    // disabled={true}
                    ref={buttonSubmit}
                    onClick={(e) => postTelegram(e)}
                    className={styles.btnSubmit}>Готово
                </button>
            </div>
            <script src="https://telegram.org/js/telegram-web-app.js"></script>
        </div>);
};

export default DaysOfWeek;

// const validationErrors = (event, daysOfWeek) => {
//     daysOfWeek.workTime.map((time) => {
//         const timeStart = time.timeStart.split(':')[0] * 60 + time.timeStart.split(':')[1] * 1
//         const timeEnd = time.timeEnd.split(':')[0] * 60 + time.timeEnd.split(':')[1] * 1
//
//         // Проверка на пустые значения строк
//         if (time.timeStart === "" || time.timeEnd === "") {
//             // alert(validationError.isEmpty.massage)
//             validationError.isEmpty.error = true
//         }
//
//         // Проверка на логику 1-е время < 2-го
//         if (timeStart > timeEnd) {
//             // alert(validationError.logicTime.massage)
//             validationError.logicTime.error = true
//         }
//
//         // Проверка на время мин время работы(мин время на работу 60 мин)
//         if (timeEnd - timeStart < 60) {
//             // alert(validationError.minWorkTime.massage)
//             validationError.minWorkTime.error = true
//         }
//
//         // Проверка правильности начального времени
//         if (timeStart < 420 || timeStart > 1320) {
//             // alert(validationError.startWorkTime.massage)
//             validationError.startWorkTime.error = true
//         }
//
//         // Проверка правильности конечного времени
//         if (timeEnd < 480 || timeEnd > 1380) {
//             // alert(validationError.endWorkTime.massage)
//             validationError.endWorkTime.error = true
//         }
//
//         if (time.id) {
//             let timeLastEnd = daysOfWeek.workTime[time.id - 1].timeEnd.split(':')[0] * 60 + daysOfWeek.workTime[time.id - 1].timeEnd.split(':')[1] * 1
//             console.log(timeLastEnd)
//             console.log(timeStart)
//             if (timeStart < timeLastEnd) {
//                 validationError.intersection.error = true
//             }
//         }
//         return validationError;
//     })
// }
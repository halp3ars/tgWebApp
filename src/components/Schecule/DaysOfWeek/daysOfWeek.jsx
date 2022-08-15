import React, {useEffect, useRef, useState} from 'react';
import liPlus, {ReactComponent as Plus} from "../../Access/Img/li_plus.svg"
import IntervalTimeItem from "./SelectTime/IntervalTymeItem";
import styles from "./daysOfWeek.module.css"

const DaysOfWeek = (props) => {

    const {userData} = props

    // eslint-disable-next-line no-undef
    const {id} = Telegram.WebApp.initDataUnsafe.user

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

    function validation(e, daysOfWeek) {
        e.preventDefault()
        setInterval(interval.map((item) => {
            return item.id == e.target.name ? {
                ...item, workTime: [...item.workTime, {
                    id: daysOfWeek.workTime[daysOfWeek.workTime.length - 1].id + 1, timeStart: '', timeEnd: ''
                }]
            } : item
        }))
    }

    const postTelegram = (e) => {
        e.preventDefault()
        buttonSubmit.current.disabled = true
        const mas = interval.map((inter, index) => (
                inter.isActive ? (
                    periodOfWorks[index].firstIntervalFrom = inter.workTime[0].timeStart !== '' ?
                        (inter.workTime[0].timeStart).slice(0, 2) : 0,
                        periodOfWorks[index].firstIntervalTo = inter.workTime[0].timeEnd !== '' ?
                            (inter.workTime[0].timeEnd).slice(0, 2) : 0,
                    inter.workTime.length >= 2 &&
                    (periodOfWorks[index].secondIntervalFrom = inter.workTime[1].timeStart != '' ?
                        (inter.workTime[1].timeStart).slice(0, 2) : 0,
                        periodOfWorks[index].secondIntervalTo = inter.workTime[1].timeEnd != '' ?
                            (inter.workTime[1].timeEnd).slice(0, 2) : 0), inter.workTime.length >= 3 &&
                    (periodOfWorks[index].thirdIntervalFrom = inter.workTime[2].timeStart != '' ?
                        (inter.workTime[2].timeStart).slice(0, 2) : 0,
                        periodOfWorks[index].thirdIntervalTo = inter.workTime[2].timeEnd != '' ?
                            (inter.workTime[2].timeEnd).slice(0, 2) : 0), inter.workTime.length >= 4 &&
                    (periodOfWorks[index].fourthIntervalFrom = inter.workTime[3].timeStart != '' ?
                        (inter.workTime[3].timeStart).slice(0, 2) : 0,
                        periodOfWorks[index].fourthIntervalTo = inter.workTime[3].timeEnd != '' ?
                            (inter.workTime[3].timeEnd).slice(0, 2) : 0)) : null
            )
        )
        const data = periodOfWorks.filter((item) => item.firstIntervalFrom != '')

        fetch('https://halpear.social:80/master ', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({...userData, "telegramId": id}),
            }
        ).then(res => {
            fetch('https://halpear.social:80/Schedule', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                    },
                    body: JSON.stringify({periodOfWorks: data, "telegramId": id}),
                }
            ).then(res => {
                buttonSubmit.current.disabled = false
                // eslint-disable-next-line no-undef
                Telegram.WebApp.close()
            })
        }).finally(() =>
            buttonSubmit.current.disabled = false
        )


    }

    const buttonSubmit = useRef(null)
    let tg = window.Telegram.WebApp;
    tg.MainButton.color = "#143F6B";

    const masActive = interval.filter(item => item.isActive)

    return (
        <div className={styles.daysOfWeek}>
            {/* eslint-disable-next-line no-undef */}
            <form
                // id={'postTelegram'}
                onSubmit={(e) => postTelegram(e)}>
                {interval.map(daysOfWeek => (
                    <div key={daysOfWeek.id} className={styles.onOfDaysItem}>
                        <div className={daysOfWeek.isActive ? styles.oneOfDaysEnable : styles.oneOfDaysDisable}>
                            <div className={styles.onOfDays}>
                                <button type={'button'}
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
                                    {daysOfWeek.workTime.map((item, index) => (
                                        <IntervalTimeItem key={item.id}
                                                          index={index}
                                                          value={interval}
                                                          setValue={setInterval}
                                                          daysOfWeekId={daysOfWeek.id}
                                                          idItem={item.id}
                                                          workTime={daysOfWeek.workTime}
                                                          startTime={item.timeStart}
                                                          endTime={item.timeEnd}
                                                          prevEndTime={daysOfWeek.workTime.length > 1 ? daysOfWeek.workTime[daysOfWeek.workTime.length - 2].timeEnd : null}
                                                          prevStartDate={daysOfWeek.workTime.length > 1 ? daysOfWeek.workTime[daysOfWeek.workTime.length - 2].timeStart : null}
                                            // buttonSubmit={buttonSubmit}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button
                                type={'button'}
                                id={daysOfWeek.id}
                                name={daysOfWeek.id}
                                onClick={
                                    (e) => {
                                        validation(e, daysOfWeek)
                                    }
                                }
                                className={daysOfWeek.isActive && daysOfWeek.workTime.length < 4 && daysOfWeek.workTime[interval[daysOfWeek.id].workTime.length - 1].timeStart.slice(0, 3) + 1 <= daysOfWeek.workTime[interval[daysOfWeek.id].workTime.length - 1].timeEnd.slice(0, 3) && (daysOfWeek.workTime.length > 1 ? daysOfWeek.workTime[interval[daysOfWeek.id].workTime.length - 1].timeStart >= daysOfWeek.workTime[interval[daysOfWeek.id].workTime.length - 2].timeEnd : daysOfWeek.isActive)
                                    ? styles.addTimeActive : styles.addTimeNotActive}>
                                <Plus/>
                                Добавить время
                            </button>
                        </div>
                    </div>
                ))}
                <div>
                    <button
                        type={'submit'}
                        ref={buttonSubmit}
                        disabled={!masActive.length}
                        className={styles.btnSubmit}>Готово
                    </button>
                </div>
            </form>
        </div>);
};

export default DaysOfWeek;

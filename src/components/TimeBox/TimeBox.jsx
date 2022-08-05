import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ReactComponent as Plus} from "../Access/Img/li_plus.svg";

import styles from './TimeBox.module.css'
import IntervalTimeItem from "../IntervalTimeItem/Interval.jsx";

const TimeBox = () => {
        // Ошибки
        const [errorMinChange, setErrorMinChange] = useState(false)
        const [errorStartEndChange, setErrorStartEndChange] = useState(false)
        const [errorMaxEndChange, setErrorMaxEndChange] = useState(false)
        const [errorMaxStartChange, setErrorMaxStartChange] = useState(false)
        const [errorMinDurationChange, setErrorMinDurationChange] = useState(false)
        const [errorNewStartChange, setErrorNewStartChange] = useState(false)

        // Массив периодов
        const [workTime, setWorkTime] = useState([{
            id: 0,
            timeStart: '',
            timeEnd: '',
        }])

        const addWorkTimeButton = useRef()
        const submitButton = useRef()

        // Запрет на изначальное отправку времени
        useLayoutEffect(() => {
            submitButton.current.disabled = true
        }, [])

        // Отключение Enter
        useEffect(() => {
            document.addEventListener('keypress', function (e) {
                if (e.keyCode === 13 || e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            });
        }, [])

        // Отключения добавления времени при 4 смен
        useEffect(() => {
            workTime.length < 4
                ? addWorkTimeButton.current.disabled = false
                : addWorkTimeButton.current.disabled = true
        }, [workTime])

        // Валидация
        useEffect(() => {
            let enabledAdd = true
            workTime.map((item, index, workTime) => {

                // Проверка: пустые ли поля
                (item.timeStart === '' || item.timeEnd === '') ? enabledAdd = false : enabledAdd = true;

                let timeStart = item.timeStart.split(':')[0] * 60 + item.timeStart.split(':')[1] * 1
                let timeEnd = item.timeEnd.split(':')[0] * 60 + item.timeEnd.split(':')[1] * 1

                // Проверка: начальное время < конечное время
                if (timeStart >= timeEnd) {
                    enabledAdd = false
                    setErrorStartEndChange(true)
                } else {
                    setErrorStartEndChange(false)
                }

                // Проверка: Минимальное время - 7:00
                if (timeStart < 420) {
                    enabledAdd = false
                    setErrorMinChange(true)
                } else {
                    setErrorMinChange(false)
                }

                // Проверка: Максимальное время (конец) - 23:00
                if (timeEnd > 1380) {
                    enabledAdd = false
                    setErrorMaxEndChange(true)
                } else {
                    setErrorMaxEndChange(false)
                }

                // Проверка: Максимальное время (начало) - 22:00
                if (timeStart > 1320) {
                    enabledAdd = false
                    setErrorMaxStartChange(true)
                } else {
                    setErrorMaxStartChange(false)
                }

                // Проверка: Минимальное время смены - 1 час
                if (timeEnd - 60 < timeStart) {
                    enabledAdd = false
                    setErrorMinDurationChange(true)
                } else {
                    setErrorMinDurationChange(false)
                }

                // Проверка: Время начала новой смены не должно быть раньше других смен
                if (item.id > 0) {
                    let timeLastEnd = workTime[index - 1].timeEnd.split(':')[0] * 60 + workTime[index - 1].timeEnd.split(':')[1] * 1
                    if (timeStart < timeLastEnd) {
                        enabledAdd = false
                        setErrorNewStartChange(true)
                    } else {
                        setErrorNewStartChange(false)
                    }
                }
                // Отключение кнопки
                if (!enabledAdd) {
                    submitButton.current.disabled = true
                    addWorkTimeButton.current.disabled = true;
                } else {
                    submitButton.current.disabled = false
                }

            })
        }, [workTime])

        // Удаление смены
        const onDelete = (id) => {
            workTime.length > 1 && setWorkTime(workTime.filter((item) => item.id !== id))
        }

        // Добавления времени
        const handleOnClick = (e) => {
            e.preventDefault();
            setWorkTime([...workTime, {id: workTime.length, timeStart: '', timeEnd: ''}])
        }

        // Функция преобразования данных в JSON
        //     const getReframeData = (e) => {
        //         e.preventDefault();
        //         let jsonData = JSON.stringify(workTime)
        //         console.log(jsonData)
        //     }  const getReframeData = (e) => {
        //             e.preventDefault();
        //
        //

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
            }]

        const postTG = (e) => {
            e.preventDefault()
            const mas = periodOfWorks.map((inter, index) => (
                inter.firstIntervalFrom = workTime[0].timeStart !== '' ?
                    (workTime[0].timeStart).slice(0, 2) : 0,
                    inter.firstIntervalTo = workTime[0].timeEnd !== '' ?
                        (workTime[0].timeEnd).slice(0, 2) : 0,
                    workTime.length >= 2 ?
                        (inter.secondIntervalFrom = workTime[1].timeStart !== '' ?
                            (workTime[1].timeStart).slice(0, 2) : 0,
                            inter.secondIntervalTo = workTime[1].timeEnd !== '' ?
                                (workTime[1].timeEnd).slice(0, 2) : 0)
                        && workTime.length >= 3 ?
                            (inter.thirdIntervalFrom = workTime[2].timeStart !== '' ?
                                (workTime[2].timeStart).slice(0, 2) : 0,
                                inter.thirdIntervalTo = workTime[2].timeEnd !== '' ?
                                    (workTime[2].timeEnd).slice(0, 2) : 0)
                            && workTime.length >= 4 ?
                                (inter.fourthIntervalFrom = workTime[3].timeStart !== '' ?
                                    (workTime[3].timeStart).slice(0, 2) : 0,
                                    inter.fourthIntervalTo = workTime[3].timeEnd !== '' ?
                                        (workTime[3].timeEnd).slice(0, 2) : 0) : 0 : 0 : 0
            ))
            console.log({periodOfWorks: periodOfWorks})
            fetch('https://halpear.social:80/Schedule',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                    },
                    body: JSON.stringify({periodOfWorks: periodOfWorks}),
                }
            ).then(res => {
                window.location.href = "https://t.me/ndfsdjkgnj_bot"
            })
        }


        return (
            <div className={styles.timeBoxContent}>
                <div className={styles.formContent}>
                    <span className={styles.title}>Понедельник — Пятница</span>
                    <form id="intervalTimes">
                        {workTime.map((item) => (
                            <IntervalTimeItem
                                key={item.id}
                                value={workTime}
                                setValue={setWorkTime}
                                id={item.id}
                                onDelete={onDelete}
                            />
                        ))}
                    </form>
                    <span
                        className={errorStartEndChange ? styles.errorEnabled : styles.errorDisabled}>Некоректно введно время</span>
                    <span
                        className={errorMinChange ? styles.errorEnabled : styles.errorDisabled}>Минимальное время - 7:00</span>
                    <span className={errorMaxEndChange ? styles.errorEnabled : styles.errorDisabled}>Максимальное время конца смены- 23:00</span>
                    <span className={errorMaxStartChange ? styles.errorEnabled : styles.errorDisabled}>Максимальное время начала смены - 22:00 </span>
                    <span className={errorMinDurationChange ? styles.errorEnabled : styles.errorDisabled}>Минимальная длительность смены - 1 час</span>
                    <span className={errorNewStartChange ? styles.errorEnabled : styles.errorDisabled}>Новая смена не должна быть раньше предыдущих</span>
                    <button
                        ref={addWorkTimeButton}
                        form="intervalTimes"
                        onClick={handleOnClick}
                        className={styles.btnAddTime}
                    >
                        <Plus/>
                        Добавить время
                    </button>
                </div>
                <button
                    ref={submitButton}
                    form="intervalTimes"
                    type='submit'
                    onClick={(e) => postTG(e)}
                    className={styles.btnSubmit}>Готово
                </button>
            </div>
        );
    }
;

export default TimeBox;
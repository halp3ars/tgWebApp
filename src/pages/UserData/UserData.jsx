import React, {useEffect, useRef, useState} from 'react';
import styles from './UserData.module.css'

export const UserData = (props) => {

    const {setWindow, setUserData, userData} = props

    const [isActiveStatus, setActiveStatus] = useState([
        {id: 1, isActive: false},
        {id: 2, isActive: false},
        {id: 3, isActive: false}
    ])


    useEffect(() => {
        const mas = isActiveStatus.map((item)=> item.isActive ? {id:item.id} : null)
        setUserData({...userData, activityList: mas.filter(item => item != null)})
    }, [isActiveStatus])

    const handlerCheckbox = (e) => {
        e.preventDefault()
        setActiveStatus(isActiveStatus.map((item) => item.id == e.target.id ? {
            ...item,
            isActive: !item.isActive
        } : item))
    }

    console.log(userData.activityList.length)

    return (
        <form className={styles.formUserData} onSubmit={() => setWindow(false)}>
            <input className={styles.inputData} name={'name'} pattern={"^[а-яА-ЯЁёa-zA-Z]{2,20}$"}
                   onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                   required={true} placeholder={'Введите имя'} type="text"/>
            <input className={styles.inputData} name={'surname'} pattern={"^[а-яА-ЯЁёa-zA-Z]{2,20}$"}
                   onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                   required={true} placeholder={'Введите фамилию'} checked={true} type="text"/>
            <input className={styles.inputData} name={'address'}
                   onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                   required={true} placeholder={"Введите адресс"} type="text" maxLength={100}/>

            <div className={styles.title}>Выберите услуги *</div>
            <div className={styles.checkboxWrap}>
                <div id={2} onClick={(e) => handlerCheckbox(e)}
                     className={!isActiveStatus[1].isActive ? styles.checkboxItemActive : styles.checkboxItem}>
                    Ноготочки
                </div>
                <div id={1} onClick={(e) => handlerCheckbox(e)}
                     className={!isActiveStatus[0].isActive ? styles.checkboxItemActive : styles.checkboxItem}>
                    Бровки
                </div>
                <div id={3} onClick={(e) => handlerCheckbox(e)}
                     className={!isActiveStatus[2].isActive ? styles.checkboxItemActive : styles.checkboxItem}>
                    Реснички
                </div>
            </div>
            <button type={"submit"} disabled={userData.activityList.length === 0 ? true : false} className={styles.btnSubmitData}>Продолжить</button>
        </form>
    );
};



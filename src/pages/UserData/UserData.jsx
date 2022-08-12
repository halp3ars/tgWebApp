import React from 'react';
import styles from './UserData.module.css'

export const UserData = (props) => {

    const {setWindow, setUserData, userData} = props

    return (
        <form className={styles.formUserData} onSubmit={()=>setWindow(false)}>
            <input className={styles.inputData} name={'name'} pattern={"^[а-яА-ЯЁёa-zA-Z]{2,20}$"}
                   onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
                   required={true} placeholder={'Введите имя'} type="text"/>
            <input className={styles.inputData} name={'surname'} pattern={"^[а-яА-ЯЁёa-zA-Z]{2,20}$"}
                   onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
                   required={true} placeholder={'Введите фамилию'} type="text"/>
            <input className={styles.inputData} name={'address'}
                   onChange={(e)=>setUserData({...userData, [e.target.name]:e.target.value})}
                   required={true} placeholder={"Введите адресс"} type="text" maxLength={100}/>
            <button type={"submit"} className={styles.btnSubmitData}>Продолжить</button>
        </form>
    );
};



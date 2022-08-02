import React from 'react';
import styles from "./Header.module.css"
import Union from "../Access/Img/Union.svg"

const Header = () => {
    return (
        <header className={styles.headerPage}>
            <div className={styles.union}>
                <img src={Union} alt="Union"/>
            </div>
            <div className={styles.back}>
                Назад
            </div>
        </header>
    );
};

export default Header;
import React, {useState} from 'react';
import TypeTimetable from "./TypeTimetable/typeTimetable"
import styles from "./TgDatePicker.module.css"
import Schecule from "./Schecule/schecule";
import Header from "./Header/Header";
import IphoneInfo from "./Access/Img/Light.svg";
import EasySchedulePage from "../pages/EasySchedulePage";

const TgDatePicker = () => {

    const [pageActive, setPageActive] = useState(false)
    return (
        <div className={styles.container}>
            {/*<img src={IphoneInfo} alt="info"/>*/}
            <div className={styles}>
                {/*<Header/>*/}
                <div className={styles.fullPage}>
                    <TypeTimetable
                        pageActive={pageActive}
                        setPageActive={setPageActive}
                    />
                    <h1 className={styles.title}>Выберите график работы</h1>
                    {!pageActive ? <Schecule/> : <EasySchedulePage/>
                    }
                </div>
            </div>
        </div>

    );
};

export default TgDatePicker;
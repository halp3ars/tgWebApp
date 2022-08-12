import React, {useState} from 'react';
import TypeTimetable from "./TypeTimetable/typeTimetable"
import Schecule from "./Schecule/schecule";
import EasySchedulePage from "../pages/EasySchedulePage";
import styles from "./TgDatePicker.module.css"


const TgDatePicker = (props) => {

    const {setWindow} = props

    const [pageActive, setPageActive] = useState(false)
    return (
        <div className={styles.container}>
            <button onClick={() => setWindow(true)}>Назад</button>
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
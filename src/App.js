import './App.css';
import TgDatePicker from "./components/TgDatePicker";
import {UserData} from "./pages/UserData";
import {useState} from "react";


function App() {

    const [window, setWindow] = useState(true)
    const [userData, setUserData] = useState({
        name: '',
        surname:'',
        address: ''
    })

    return (
        <div className="app">
            {window ? <UserData setUserData={setUserData} userData={userData} setWindow={setWindow}/> : <TgDatePicker userData={userData} setWindow={setWindow}/>}
        </div>
    );
}

export default App;

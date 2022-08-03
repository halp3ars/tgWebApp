import './App.css';
import TgDatePicker from "./components/TgDatePicker";



function App() {
    console.log(window.Telegram.WebApp)

    return (
    <div className="App">
        <TgDatePicker/>
    </div>
  );
}

export default App;

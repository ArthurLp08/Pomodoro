import "../index.css"
import { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function ConfigMenu({isOpen}){

    const [pomodoro, setPomodoro] = useState(localStorage.getItem("pomodoro"));
    const [short, setShort] = useState(localStorage.getItem("shortBreak"));
    const [long, setLong] = useState(localStorage.getItem("longBreak"));


    const HandleDefault = () =>{
        setPomodoro(25);
        setShort(5);
        setLong(15);
    }

    const ChangePomodoro = (e) => {
        setPomodoro(e.target.value);
    }

    const ChangeShort = (e) => {
        setShort(e.target.value);
    }

    const ChangeLong = (e) => {
        setLong(e.target.value);
    }

    const HandleSubmit = () => {
      localStorage.setItem("pomodoro", pomodoro);
      localStorage.setItem("shortBreak", short);
      localStorage.setItem("longBreak", long);
    }

    return(

        <ReactModal isOpen={isOpen}>
            <form onSubmit={HandleSubmit}>
                <h1>Configuration</h1>

                <span>Timer</span>
                <input onChange={ChangePomodoro} defaultValue={pomodoro} min={1} type='number'/>

                <span>Short Break</span>
                <input onChange={ChangeShort} defaultValue={short} min={1} type='number'/>

                <span>Long Break</span>
                <input onChange={ChangeLong} defaultValue={long} min={1} type='number'/>

                <button onClick={HandleDefault}>Default</button>
                <button type='submit'>Apply</button>
            </form>


        </ReactModal>
    )
}

export default ConfigMenu

import "../index.css"
import { useState } from 'react';
import ReactModal from 'react-modal';
import ConfigTitle from "./ConfigTitle";
import ConfigButton from "./ConfigButton";
import ConfigInput from "./ConfigInput";

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

        <ReactModal style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)',}  }} className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75vw] h-[75vh] rounded-[16px] bg-[#343B41]" isOpen={isOpen}>
        <div className="flex flex-col p-[16px] w-full h-full text-center justify-center align-middle flex-grow">    
            <form className="flex flex-col" onSubmit={HandleSubmit}>
                
                    <ConfigTitle text={"Configuration"} />

                    <ConfigInput text={"Timer"} onChange={ChangePomodoro} value={pomodoro} />
                    <ConfigInput text={"Short Break"} onChange={ChangeShort} value={short} />
                    <ConfigInput text={"Long Break"} onChange={ChangeLong} value={long} />

                    <ConfigButton text={"Apply"} />
                    <ConfigButton onClick={HandleDefault} text={"Default"} />
        


            </form>
        </div>

        </ReactModal>
    )
}

export default ConfigMenu

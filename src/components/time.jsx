
import { useState, useEffect } from 'react'
import ConfigMenu from './ConfigMenu';
import ModeButton from './ModeButton';
import TimerButton from './TimerButton';
import TimerText from './TimerText';


function Timer() {
    const [timer, setTimer] = useState(localStorage.getItem("pomodoro"));
    const [seconds, setSeconds] = useState(timer * 60);
    const [mode, setMode] = useState("pomodoro"); //pomo, short, long
    const [active, setActive] = useState(false);
    const [pomodorosmax, setPomodorosmax] = useState(4)
    const [pomodoros, setPomodoros] = useState(0)
    const [showConfig, setShowConfig] = useState(true)

    useEffect(() => {
        let storage = localStorage.getItem("enteredBefore");
        if (!storage) {
            localStorage.setItem("pomodoro", 25);
            localStorage.setItem("shortBreak", 5);
            localStorage.setItem("longBreak", 15);
            localStorage.setItem("enteredBefore", true);
            localStorage.setItem("pomodoros", 4);
        }

        setShowConfig(false);
        setPomodoros(0);
    }, []);

    useEffect(() => {
        if (!active) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

        if (timer == localStorage.getItem("pomodoro") && pomodoros < pomodorosmax && seconds <= 0) {
            setMode("shortBreak");
            setPomodoros(prev => prev + 1);
        }
        if (timer == localStorage.getItem("pomodoro") && pomodoros >= pomodorosmax && seconds <= 0) {
            setMode("longBreak");
            setPomodoros(1);
        }
        if (timer == localStorage.getItem("shortBreak") && seconds <= 0) {
            setMode("pomodoro");
        }
        if (timer == localStorage.getItem("longBreak") && seconds <= 0) {
            setMode("pomodoro");
            setPomodoros(0)
        }

        return () => clearInterval(interval);

    }, [active, seconds]);

    const HandleStart = () => {
        setActive(true);
    }


    const formatTimeLeft = (seconds) => {
        return (`${Math.floor(seconds / 60)}:${(seconds % 60 > 9)
                ? seconds % 60
                : '0' + seconds % 60
            }`);
    }

    useEffect(() => {
        setSeconds(timer * 60);
        setTimer(localStorage.getItem(mode));
        setActive(false);
    }, [timer, mode]);

    return (
        <div className='flex justify-center align-middle flex-col'>
            
            <ConfigMenu isOpen={showConfig} />

            <div className='flex flex-row justify-center w-[100vw]'>
                <ModeButton text={"Focus"} onClick={() => setMode("pomodoro")} />
                <ModeButton text={"Short Break"} onClick={() => setMode("shortBreak")} />
                <ModeButton text={"Long Break"} onClick={() => setMode("longBreak")} />
            </div>

            <TimerText text={formatTimeLeft(seconds)} />
            <div className='flex flex-row justify-center w-[100vw]'>
                <TimerButton text={"Start"} onClick={HandleStart} />
                <TimerButton text={"Config"} onClick={() => {setShowConfig(true)}} />
            </div>

        </div>

    )
}

export default Timer
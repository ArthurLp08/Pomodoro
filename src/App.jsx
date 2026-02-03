import { useState, useEffect } from 'react'
import ConfigMenu from './components/ConfigMenu';

function App() {
  const [timer, setTimer] = useState(localStorage.getItem("pomodoro"));
  const [seconds, setSeconds] = useState(timer * 60);
  const [mode, setMode] = useState("pomodoro"); //pomo, short, long
  const [active, setActive] = useState(false);
  const [pomodorosmax, setPomodorosmax] = useState(4)
  const [pomodoros, setPomodoros] = useState(0)
  const [showConfig, setShowConfig] = useState(true)


  useEffect(() => {
    let storage = localStorage.getItem("enteredBefore");
    if (!storage){
      localStorage.setItem("pomodoro", 25);
      localStorage.setItem("shortBreak", 5);
      localStorage.setItem("longBreak", 15);
      localStorage.setItem("enteredBefore", true);
      localStorage.setItem("pomodoros", 4);
    }

    setShowConfig(false);
    setPomodoros(0);
  }, []);

  const formatTimeLeft = (seconds) => {
    return(`${Math.floor(seconds/60)}:${
      (seconds % 60 > 9)
      ? seconds % 60 
      : '0' + seconds % 60
    }`);
  }
  
  useEffect(() => {
    setSeconds(timer * 60);
    setTimer(localStorage.getItem(mode));
    setActive(false);
  }, [timer, mode]);

  useEffect(() => {
      if (!active) return;
    
      const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    if (timer == localStorage.getItem("pomodoro") && pomodoros < pomodorosmax && seconds <= 0){
      setMode("shortBreak");
      setPomodoros(prev => prev + 1);
    }
    if (timer == localStorage.getItem("pomodoro") && pomodoros >= pomodorosmax && seconds <= 0){
      setMode("longBreak");
      setPomodoros(1);
    }
    if (timer == localStorage.getItem("shortBreak") && seconds <= 0){
      setMode("pomodoro");
    }
    if (timer == localStorage.getItem("longBreak") && seconds <= 0){
      setMode("pomodoro");
      setPomodoros(0)
    }

    return () => clearInterval(interval);
    
  }, [active, seconds]);

  const HandleStart = () => {
    setActive(true);
  }

  return (
    <>

      <ConfigMenu isOpen={showConfig} />

      <button onClick={() => setMode("pomodoro")}>Focus</button>
      <button onClick={() => setMode("shortBreak")}>Short Break</button>
      <button onClick={() => setMode("longBreak")}>Long Break</button>
      <h1>{formatTimeLeft(seconds)}</h1>
      <button onClick={HandleStart}>Start</button>

      <button onClick={() => {setShowConfig(true)}}>Config</button>
    </>
  )
}

export default App

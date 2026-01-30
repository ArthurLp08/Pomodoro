import { useState, useEffect, act } from 'react'


function App() {
  const [timer, setTimer] = useState(localStorage.getItem("pomodoro"));
  const [seconds, setSeconds] = useState(timer * 60);
  const [mode, setMode] = useState("pomodoro"); //pomo, short, long
  const [active, setActive] = useState(false);
  

  useEffect(() => {
    let storage = localStorage.getItem("enteredBefore");
    if (!storage){
      localStorage.setItem("pomodoro", 25);
      localStorage.setItem("shortBreak", 5);
      localStorage.setItem("longBreak", 15);
      localStorage.setItem("enteredBefore", true);
    }
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

      return () => clearInterval(interval);
    
    
  }, [active, seconds]);

  const HandleStart = () => {
    setActive(true);
  }

  return (
    <>
      <button onClick={() => setMode("pomodoro")}>Focus</button>
      <button onClick={() => setMode("shortBreak")}>Short Break</button>
      <button onClick={() => setMode("longBreak")}>Long Break</button>
      <h1>{formatTimeLeft(seconds)}</h1>
      <button onClick={HandleStart}>Start</button>
    </>
  )
}

export default App

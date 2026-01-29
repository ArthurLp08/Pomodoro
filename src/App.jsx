import { useState, useEffect } from 'react'


function App() {
  const [timer, setTimer] = useState(localStorage.getItem("pomodoro"));
  const [seconds, setSeconds] = useState(timer * 60);
  const [mode, setMode] = useState("pomo"); //pomo, short, long

  useEffect(() => {
    let storage = localStorage.getItem("enteredBefore");
    if (!storage){
      localStorage.setItem("pomodoro", 25);
      localStorage.setItem("shortBreak", 5);
      localStorage.setItem("LongBreak", 15);
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

  return (
    <>
      <h1>{formatTimeLeft(seconds)}</h1>
    </>
  )
}

export default App

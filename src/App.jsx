import { useState, useEffect } from 'react'


function App() {

  useEffect(() => {
    let storage = localStorage.getItem("pomodoro");
    if (!storage){
      localStorage.setItem("pomodoro", 25);
      localStorage.setItem("shortBreak", 5);
      localStorage.setItem("LongBreak", 15);
    }
  })

  return (
    <>
    
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let newTime = new Date().toLocaleTimeString()

  const [time,setTime] = useState(newTime)

  const ChangeDate = () => {
   newTime = new Date().toLocaleTimeString();
    setTime(newTime)

  }
  return (
    <>
     <h1>{time}</h1>

     <button  onClick={ChangeDate}>Update Time</button>
    </>
  );
}

export default App;

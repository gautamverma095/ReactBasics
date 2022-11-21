import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [num,setNum] = useState(0)
  const [nums,setNums] = useState(0)

  useEffect(() => {
    alert("clicked")
  },[num])
  return (
   <>
     <button onClick={() => {
       setNum(num+1)
     }}>Clicked me {num} times</button>
     <br/>
     <button onClick={() => {
       setNums(nums+1)
     }}>Clicked me {nums} times</button>
   </>
  );
}

export default App;

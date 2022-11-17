import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"

function App() {
  let [count,setCount] = useState(0)

  const increase = (num) => {
        setCount(count+num)
  }

  return (
    <>
      <h1>Inc and Dec</h1>

<h1>{count}</h1>

      <button onClick={() => {
        increase(1)
      }}>Inc</button>
      <button  onClick={() => {
        increase(-1)
      }}>Dec</button>
    </>
  );
}

export default App;

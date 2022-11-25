import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [num,setNum] = useState(0)

  useEffect(() => {
    document.title = `clicked me ${num} times`
  },[])

  const handle = () => {
    setNum(num+1)
  }
  return (
    <div className="App">
    <button onClick={handle}>Clicked me {num} times</button>
    </div>
  );
}

export default App;

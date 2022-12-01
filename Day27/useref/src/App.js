import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import { useState } from 'react';

function App() {

  const [show,setShow] = useState(false)
  return (
    <div className="App">

      {show && <Timer/>}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;

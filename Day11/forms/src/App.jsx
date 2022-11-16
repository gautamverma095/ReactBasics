import logo from './logo.svg';
import './App.css';
import React ,{useState}from "react"


function App() {

const [text,setText] = useState("")
const [fullname,setFullname] = useState()

const textChange = (event) => {
  setText(event.target.value)
}
const nameChange = () => {
  setFullname(text)
}

  return (
    <>
      <div>
        <h1>Hello {fullname} </h1>
        <input  type="text"  placeholder='Enter your name' onChange={textChange} value ={text}/>
        <button onClick={nameChange}>Click me</button>
      </div>
    </>
  );
}

export default App;

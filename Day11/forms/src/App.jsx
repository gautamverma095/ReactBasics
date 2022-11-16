import logo from './logo.svg';
import './App.css';
import React ,{useState}from "react"


function App() {

const [text,setText] = useState("")
const [text2,setText2] = useState("")

const [firstname,setFirstname] = useState()
const [lastnamenew,setLastnameNew] = useState()


const textChange = (event) => {
  setText(event.target.value)
}

const  textChange2 = (event) => {
  setText2(event.target.value)
}
const onSubmits = (event) => {
  event.preventDefault()
  setFirstname(text)
  setLastnameNew(text2)
}

  return (
    <>
    <form onSubmit={onSubmits}>

      <div>
        <h1>Hello {firstname} {lastnamenew} </h1>
        <input  type="text"  placeholder='Enter your name' onChange={textChange} value ={text}/>
        <input  type="text"  placeholder='Enter your lastname' onChange={textChange2} value ={text2}/>
        <button type='submit'>Click me</button>
      </div>
      </form>
    </>
  );
}

export default App;

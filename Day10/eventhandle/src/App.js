import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react"

function App() {

  const purple = "#8e44ad"

  const [bg,setBg] = useState(purple)
  const [name,setName] = useState("Click Here")
  const bgChange = () => {
    console.log("dd");
    setBg("red")

    setName("Ouch!! 🤯")
   
  };

  const bgBack = () => {
    setBg("#8e44ad")
    setName("Back 🤯")
  }
  return (
    <>
      <div style={{ backgroundColor:bg}}>
        <button onClick={bgChange}  onDoubleClick = {bgBack}>{name}</button>
      </div>
    </>
  );
}

export default App;

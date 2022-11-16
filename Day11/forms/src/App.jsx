import logo from './logo.svg';
import './App.css';
import React ,{useState}from "react"


function App() {

const [fullname,setFullname] = useState({
  fname:"",
  lname:""
})



const textChange = (event) => {
  // console.log(event.target.name);
  const name = event.target.name
  const value = event.target.value

  setFullname((ddd) => {
   
    if(name === "fname")
    {
      return {
        fname:value,
    lname:ddd.lname
      }
    }
   else if(name === "lname")
    {
      return {
        fname:ddd.fname,
  lname:value
      }
    }

  })

}


const onSubmits = (event) => {
  event.preventDefault()

}

  return (
    <>
    <form onSubmit={onSubmits}>

      <div>
        <h1>Hello {fullname.fname} {fullname.lname} </h1>
        <input name='fname' type="text"  placeholder='Enter your name' onChange={textChange} value ={fullname.fname}/>
        <input name='lname' type="text"  placeholder='Enter your lastname' onChange={textChange} value ={fullname.lname}/>
        <button type='submit'>Click me</button>
      </div>
      </form>
    </>
  );
}

export default App;

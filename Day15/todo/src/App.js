import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Todolist from './Todolist';


function App() {
  const [item,setItem] = useState("")
  const [list,setList] = useState([])
  

  const addItem = (event) => {
    setItem(event.target.value);
  }

  const addList = () => {
    setList((preValue) => {
      return [...preValue,item]
    })
    setItem("")


  }
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <input type="text" placeholder ="Enter Item" onChange={addItem} value = {item}/>
        <Button onClick={addList}> <AddIcon/></Button>
        


        <br/>

        <ol>
          {list.map((el,index) => {
            return <Todolist item = {el} key = {index} id = {index} />
          })}
        </ol>
      </div>
    </>
  );
}

export default App;

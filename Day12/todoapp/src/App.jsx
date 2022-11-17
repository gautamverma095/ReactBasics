import React, { useState } from "react"
import Todolist from "./Todolist"

const App = () => {

  const [item,setItem] = useState("")

  const [itemList,setItemlist] = useState([])

  const addItem = (event) => {
    setItem(event.target.value)
  }
  const addingonClick = () => {
    setItemlist((oldVal) => {
      return [...oldVal,item]
    })
    setItem("")
  }
  const deleteItem  = (id) => {
    console.log(id);
    setItemlist((oldval) => {
      return (
        oldval.filter((el,index) => {
          return index != id
        })
      )
    })
  }

  return (
     <>
     <h1>Todo List     </h1>

     <input type= "text" placeholder="Enter item" onChange={addItem} value = {item}/>
      
     <button onClick={addingonClick}>Add</button>

     <ol>
      {itemList.map((el,index) => {
        return <Todolist  item = {el} func = {deleteItem}  key = {index} id = {index}/>
      })}
     </ol>
  

    </>
  )
}
export default App
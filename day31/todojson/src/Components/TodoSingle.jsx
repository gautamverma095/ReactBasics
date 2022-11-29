import React from 'react'

 const TodoList = (props) => {

  const {title,id,status,handleToggle,handleDelete} = props
  return (
    <>
    <div style={{display :"flex" ,marginLeft : "50%"}}>
    <li>{title}   {status ? "DONE" :"NOT DONE"  } </li>
    <button  onClick={() => handleToggle(id,!status)}>Toggle</button>
    <button  onClick={() => handleDelete(id)}>Delete</button>
   
    </div>
   
    </>
  )
}  

export default TodoList

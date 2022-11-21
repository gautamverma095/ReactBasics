import React from "react";
import { useState } from 'react';

const Createnote = (props) => {

    const [note,setNote] = useState({
      title:"",
      content: ""
    })
  

  const inputEvent = (event) => {

    const {name,value} = event.target

    setNote((preVal) => {
        return {
            ...preVal,
            [name]:value

        }
    })
    

  }
  
  
    return (
        <>
        <div>
        <form>
           <input
            type= "text"
             placeholder="Enter title"
             name="title"
             onChange={inputEvent}
             value = {note.title}
             
             />
           <br/>
           <textarea 
           type = "text" 
            placeholder="Write a note"
            name="content"
            onChange={inputEvent}
            value = {note.content}
            />
           <button onClick={(event) => {
               event.preventDefault()
               props.addText(note)
               setNote({
                title:"",
      content: ""
               })
           }} >Add</button>
  
        </form>
        </div>
        
        </>
    )
  }

export default Createnote



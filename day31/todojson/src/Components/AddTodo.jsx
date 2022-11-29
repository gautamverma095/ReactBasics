import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const AddTodo = (props) => {

  const { handleAdd } = props

  const [text, setText] = useState("")

  const handleChange = (e) => {

    setText(e.target.value)

  }

  const addText = () => {
    handleAdd(text)
    setText("")
  }


  return (
    <>
      <input type="text" placeholder='enter todo' value={text} onChange={handleChange} />
      <button onClick={addText}>Add</button>
    </>
  )
}

export default AddTodo

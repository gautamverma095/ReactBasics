import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

 const Uncontrolled = () => {

    const luckyName = useRef(null)

const [show,setShow] = useState(false)

    const submitForm = (event) => {
        event.preventDefault()
        const name = luckyName.current.value

        name == "" ? alert("Please fill the details") : setShow(true)

    }
  return (
    <div>

    <form>
    
    <label htmlFor="luckyName">Enter Your Lucky Name</label>
    <br />
    <input type="text" ref={luckyName} />
    <br />
    <button onClick={submitForm}>Submit</button>
    </form>
    <h1>
      {show ? `Your Lucky Name is ${luckyName.current.value}` : "Enter Your Lucky Name"}
    </h1>
    </div>
  )
}

export default Uncontrolled

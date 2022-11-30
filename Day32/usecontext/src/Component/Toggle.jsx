import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/ContextProvider'




const Toggle = () => {

    const {toggleTheme,theme} = useContext(AppContext)

  const style =   theme === "dark" ? {color:"red",backgroundColor:"green"} :{color:"pink",backgroundColor:"yellow"}

  return (

    <>
    <button style={style} onClick={toggleTheme}>Toggle</button>
    </>
  )
}

export default Toggle
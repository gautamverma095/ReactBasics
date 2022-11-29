import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/ContextProvider'

const Toggle = () => {

    const {toggleTheme} = useContext(AppContext)

  return (

    <>
    <button onClick={toggleTheme}>Toggle</button>
    </>
  )
}

export default Toggle
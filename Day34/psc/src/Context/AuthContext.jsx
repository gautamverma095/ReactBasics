import React, { useState } from 'react'
import { createContext } from 'react'

export const mycontext = createContext()

const AuthContext = ({children}) => {

  const [isAuth,setIsAuth] = useState(false)

  const toggleAuth  = () => {
    setIsAuth(!isAuth)
  }

  return (
    <mycontext.Provider value={{isAuth,toggleAuth}}>
    {children}
    
    </mycontext.Provider>
  )
}

export default AuthContext
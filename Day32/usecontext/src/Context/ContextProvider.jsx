import React from 'react'
import { useState } from 'react';
const { createContext } = require("react");
// 1 step is create

export const AppContext = createContext()


 const ContextProvider = ({children}) => {

  const [theme,setTheme] = useState("dark")

  const toggleTheme = () => {
   setTheme(theme == "dark" ? "light" : "dark")

  }
  return (

    // step 2
    <AppContext.Provider value={{theme,toggleTheme}}>
    {children}
    </AppContext.Provider>
  )
}
export default ContextProvider



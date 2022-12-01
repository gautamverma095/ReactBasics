import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { mycontext } from './AuthContext'

const PrivateContext = ({children}) => {
    const {isAuth} = useContext(mycontext)
  if(!isAuth){
      return <Navigate to="/"/>
  }
  return children
}

export default PrivateContext
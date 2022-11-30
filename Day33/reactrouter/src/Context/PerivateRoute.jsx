import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import  { AuthContext } from './AuthContext'

const PerivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext)

    if(!isAuth)
    {
      return ( <Navigate to="/" />)
    }

    return children
}

export default PerivateRoute
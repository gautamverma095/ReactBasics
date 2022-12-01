import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { mycontext } from '../Context/AuthContext'

const Home = () => {
  const {isAuth,toggleAuth}  = useContext(mycontext)

  if(isAuth){
    return <Navigate to="/users" />
  }
  return (
    <div>
    <h1>Home</h1>
    <button onClick={toggleAuth}>Login</button>
    </div>
  )
}

export default Home
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const getUsers = () => {

  return fetch("https://reqres.in/api/users").then((res) => res.json())

}

const Users = () => {
  const [users, setUsers] = useState([])
  const {isAuth,toggleAuth} = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    getUsers().then(res => {
      console.log(res.data);
      setUsers(res.data)
    })
  }, [])

 
  return (

    <>
      <h1>Users</h1>
      <button onClick={toggleAuth}>Logout</button>
      
      <button onClick={() => navigate("/")}>Go home using useNavigate</button>
      <br />
     <Link to="/"><button>Go home with link</button></Link> 


      {
        users.map((el, index) => {
          return (

            <Link key={el.id} to={`/users/${el.id}`} >

              <li key={el.id}> name:{el.first_name}   {"    "} email: {el.email}</li>
              <img src={el.avatar} alt="" />
            </Link>
          )
        })
      }
    </>


  )
}

export default Users
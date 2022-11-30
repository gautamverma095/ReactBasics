import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const getUsers = () =>  {

  return fetch("https://reqres.in/api/users").then( (res) => res.json())

}

const Users =  () => {
  const [users, setUsers] = useState([])

  ;


  useEffect(() => {
    getUsers().then(res => {
      console.log(res.data);
      setUsers(res.data)
    })
  }, [])
  return (
    <>
    <h1>Users</h1>
    {
      users.map((el,index) => {
        return (
          
          <Link key={el.id} to={`/users/${el.id}`} style={{display:"flex"}}>
          
          <li key={el.id}> name:{el.first_name}   { "    "} email: {el.email}</li>
          <img src={el.avatar} alt="" />
          </Link>
        )
      })
    }
    </>

   
  )
}

export default Users
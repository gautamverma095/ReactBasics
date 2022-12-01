import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'


const getUsers = (id) => {

    return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json())
  }
  

const SingleUser = () => {

    const params = useParams()
    const [user,setUser] = useState({})

    useEffect(() => {
        getUsers(params.id).then((res) => {
            setUser(res.data);
        })
    },[])
  return (
    <div>
    <h1>Single user</h1>
    <Link to ="/users">
    
   
    <button>Go back</button>
    </Link>

    {
        <div>
          {user.first_name} {"  "}
          {user.last_name}
          <img src={user.avatar} alt="" />
        </div>
    }
    </div>
  )
}

export default SingleUser
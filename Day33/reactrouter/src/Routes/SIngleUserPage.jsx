import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const getUser = (id) =>  {

    return fetch(`https://reqres.in/api/users/${id}`).then( (res) => res.json())
  
  }

const SIngleUserPage = () => { 
    const [data,setData] = useState([])
    const params = useParams()
    console.log(data);


    useEffect(() => {
      getUser(params.id).then((res) => {
  setData(res.data)
      })
    
    
    }, [params.id])
    
 

  return (
    <div>
    
    <h1>id:{params.id}</h1>

  

    {
        <>
      
                 <h1>{data.first_name}</h1>
                   <img src={data.avatar} alt="dd" />
                   </>
    }
    <Link to="/users">Go Back To users</Link>
    </div>
  )
}

export default SIngleUserPage
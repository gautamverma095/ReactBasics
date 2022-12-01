import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate,useSearchParams } from 'react-router-dom'
import { mycontext } from '../Context/AuthContext'

const getUsers = ({
  page = 1
}) => {

  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) => res.json())
}



const Users = () => {

  const [data, setData] = useState([])
 

  const {isAuth,toggleAuth} = useContext(mycontext)
  let [searchParams, setSearchParams] = useSearchParams();
  let initialstate = Number(searchParams.get("page")) || 1
  const [page,setPage] = useState(initialstate)

  useEffect(() =>{
    setSearchParams({page})
  },[page])


  useEffect(() => {


    getUsers(page).then((res) => {
      console.log(res);
      setData(res.data)
    })


  }, [page])

  // if(!isAuth)
  // {
  //   return <Navigate to="/"/>
  // }

  return (
    <>
      <h1>Users</h1>
      <button onClick={toggleAuth}>Logout</button>
      {
        data.map((el, index) => {

          return (
          

<div key={el.id}>

              <button disabled = {page == 1} onClick={() => setPage(page-1)}>Pre</button>
              <h1>{page}</h1>
              <button disabled = {page == 2} onClick={() => setPage(page+1)}>Next</button>

              <Link key={el.id} to={`/users/${el.id}`} >
                <p>{el.first_name}  {el.last_name}  <img src={el.avatar} alt="" /></p>
              </Link>
              </div>
     
          )


        })
      }


    </>
  )
}

export default Users
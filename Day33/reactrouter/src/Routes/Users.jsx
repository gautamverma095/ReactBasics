import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const getUsers = ({
  page=1
}) => {

  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) => res.json())

}

const Users = () => {
  const [users, setUsers] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  const {isAuth,toggleAuth} = useContext(AuthContext)
  let initialstate = Number(searchParams.get("page")) || 1
 

  const [page,setPage] = useState(initialstate)


  useEffect(() => {
    setSearchParams({page})
  },[page])



  const navigate = useNavigate()

  useEffect(() => {
    getUsers({page}).then(res => {
      // console.log(res.data);
      setUsers(res.data)
    })
  }, [page])

 
  return (

    <>
      <h1>Users</h1>
      <button disabled = {page==1} onClick={() => setPage(page-1)}>Pre</button>
      <h1>{page}</h1>
      <button  disabled = {page==2}  onClick={() => setPage(page+1)}>Next</button>
      <br />
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
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCities } from './api'

const Cities = () => {
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    



    useEffect(() => {

        getCities({
            page:page,
            limit:2
        }).then((res) =>{
            console.log(res.data);
            setData(res.data)
        }).catch((err) =>{
            console.log(err);
        })

    },[page])
  return (
    <div>
    <h1>item</h1>
      
     {
         data.map((el,index) => {
             return (
                 <>
                 <div key={index}>{el.title} {"  "} {el.id}</div>
                 
                 </>
             )
         })
     }
    
    <button onClick = {() => {
        setPage(page-1)
    }} >Pre</button>
    <button disabled>{page}</button>
    <button onClick = {() => {
        setPage(page+1)
    }} >Next</button>
    
    </div>
  )
}

export default Cities
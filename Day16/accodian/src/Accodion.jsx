import React, { useState } from "react"
import {questions} from "./api"
import "../src/Accodion.css"
import Myaccordion from "./Myaccordion"

const Accodion =  () => {
    const [data,setData] = useState(questions)
    return (
        <>
  <section className="main-div">
<h1>React Interview Questions</h1>
{
    data.map((el,index) => {
           return <Myaccordion 
        key = {index}
            question = {el.question} 
            ans = {el.answer}/>
    })
}
      
  </section>

        </>
    )

}

export default Accodion
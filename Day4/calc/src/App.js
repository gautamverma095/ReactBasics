import React from "react";
import {add,sub,div,mult } from "./Calc"
function App(){
  return (
  
    <ol>
      <li>Sum of two number is {add(2,3)}</li>
      <li>Sub of two number is {sub(2, 3)}</li>
      <li>Div of two number is {div(2, 3)}</li>
      <li>Mult of two number is {mult(2, 3)}</li>
    </ol>
  )
  
}

export default App
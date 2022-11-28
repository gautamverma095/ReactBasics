import React, { useReducer } from 'react'


const initialstate = 0

const reducer = (state,action) => {
    console.log(action.type);

    if(action.type == "INCREMENT")
    {
        return state+1
    }
    if(action.type == "DECREMENT")
    {
        return state-1
    }
    


}

 const UserReducer = () => {


    const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
    <h1>{state}</h1>
    
    
    <button onClick={() => dispatch({type:"INCREMENT"})}>Inc</button>
    <button onClick={() => dispatch({type:"DECREMENT"})}>Dec</button>
    </div>
  )
}


export default UserReducer